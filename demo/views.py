from django.shortcuts import render
from django.http import JsonResponse
from .necklace_demo import overlay_necklace
from PIL import Image
import base64
import io

def croppedImage(img):
  w, h = img.size
  if w <= 480:
    return img

  x = int((w-480)/2)
  y = max(h-600, 0)
  return img.crop((x, y, 480+x, 600+y))


def uploadImage(request):
  if request.method == "GET":
    return render(request, "csrf.html", content_type='text/xml; charset=utf-8')
  elif request.method == "POST":
    for k in request.POST:
      if not k.startswith("base64,"):
        continue
      imgData = k.partition(",")[2]
      imgData = imgData.replace(" ", "+")

      pad = len(imgData)%4
      imgData += "="*(0 if pad == 0 else 4-pad)

      # Crop Image to 480 by 640.
      cImage = croppedImage(Image.open(io.BytesIO(base64.b64decode(imgData))))

      # Process the image.
      result = overlay_necklace(cImage)
      if result != None:
        resBytes = base64.b64encode(result)
        resStr = resBytes.decode('utf-8')
        return JsonResponse({'data': resStr})
      break
    return JsonResponse({'data': ''})
