from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from .necklace_demo import overlay_necklace
from PIL import Image
import base64
import io


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

      # Process the image.
      result = overlay_necklace(Image.open(io.BytesIO(base64.b64decode(imgData))))
      if result != None:
        resp = HttpResponse(result, content_type="image/gif")
        resp['Content-Length'] = len(result)
        return resp
      break
    return JsonResponse({"result": "success"})
