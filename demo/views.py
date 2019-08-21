from django.shortcuts import render
from django.http import JsonResponse
from .necklace_predictor import NecklaceDemo
from PIL import Image
import base64

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
      with open("imageToSave.png", "wb") as fh:
        fh.write(base64.b64decode(imgData))
    return JsonResponse({"result": "success"})
