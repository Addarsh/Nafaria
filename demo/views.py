from django.shortcuts import render
from django.http import JsonResponse
from .necklace_demo import overlay_necklace
from .models import UserInfo
from PIL import Image, ExifTags
import base64
import io
import json
import logging

# Get an instance of a logger
logger = logging.getLogger(__name__)

def resizeImage(cImage):
  logger.info("input image width: %s, height: %s", cImage.width, cImage.height)

  # Rotate image if necessary.
  for orientation in ExifTags.TAGS.keys():
    if not ExifTags.TAGS[orientation]=='Orientation':
      continue
    if cImage._getexif() == None:
      # Do nothing
      break

    exif=dict(cImage._getexif().items())
    if exif[orientation] == 6:
      # Rotate 270 counter clockwise to get the right image.
      logger.info("Rotated image 270 counter clockwise")
      cImage = cImage.transpose(Image.ROTATE_270)
    elif exif[orientation] == 8:
      # Rotate 90 counter clockwise to get the right image.
      logger.info("Rotated image 90 counter clockwise")
      cImage = cImage.transpose(Image.ROTATE_90)
    elif exif[orientation] == 3:
      # Rotate 180 counter clockwise to get the right image.
      logger.info("Rotated image 180 counter clockwise")
      cImage = cImage.transpose(Image.ROTATE_180)
    break

  cImage = cImage.resize((480, int(480*cImage.height/cImage.width)))
  return cImage


def uploadImage(request):
  if request.method == "GET":
    return render(request, "csrf.html", content_type='text/xml; charset=utf-8')
  elif request.method == "POST":
    logger.info("uploadImage.POST called")
    try:
      data = json.loads(request.body)
      logger.info("uploadImage.POST necklace name: %s", data["necklace"])

      imgData = data["data"].split("base64,")[1]
      imgData = imgData.replace(" ", "+")

      pad = len(imgData)%4
      imgData += "="*(0 if pad == 0 else 4-pad)

      # Crop Image to 480 by 640.
      cImage = Image.open(io.BytesIO(base64.b64decode(imgData)))
      cImage = resizeImage(cImage)
      #cImage.save("/tmp/test.png", "PNG")

      # Process the image.
      result, necklaceSize = overlay_necklace(cImage, data["necklace"])
      if result != None:
        resBytes = base64.b64encode(result)
        resStr = resBytes.decode('utf-8')
        return JsonResponse({'data': resStr, 'size': necklaceSize})
      return JsonResponse({'data': '', 'size': necklaceSize})
    except Exception as e:
      logger.error("uploadImage.POST failed with exception: %s", e)
      return JsonResponse({'message': 'upload failed due to an error'}, status=500)

def signUp(request):
  if request.method == "GET":
    return render(request, "csrf.html", content_type='text/xml; charset=utf-8')
  elif request.method == "POST":
    logger.info("signUp.POST called with request: %s", request.body)
    try:
      data = json.loads(request.body)
      user = UserInfo(email=data["email"], comments=data["comments"])
      user.save()
      return JsonResponse({})
    except Exception as e:
      logger.error("signUp.POST failed with exception: %s", e)
      return JsonResponse({'message': "signUp failed due to an error"}, status=500)
