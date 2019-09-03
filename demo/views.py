from django.shortcuts import render
from django.http import JsonResponse
from .necklace_demo import overlay_necklace
from .models import UserInfo
from PIL import Image
import base64
import io
import json
import logging

# Get an instance of a logger
logger = logging.getLogger(__name__)

def croppedImage(img):
  w, h = img.size
  if w <= 480:
    return img

  x = int((w-480)/2)
  y = max(h-640, 0)
  return img.crop((x, y, 480+x, 640+y))


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
      cImage = croppedImage(Image.open(io.BytesIO(base64.b64decode(imgData))))

      # Process the image.
      result = overlay_necklace(cImage, data["necklace"])
      if result != None:
        resBytes = base64.b64encode(result)
        resStr = resBytes.decode('utf-8')
        return JsonResponse({'data': resStr})
      return JsonResponse({'data': ''})
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
