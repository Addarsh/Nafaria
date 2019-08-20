from django.shortcuts import render
from django.http import HttpResponse
from .necklace_predictor import NecklaceDemo

def uploadImage(request):
  if request.method == "GET":
    return render(request, "csrf.html", content_type='text/xml; charset=utf-8')
  elif request.method == "POST":
    for key, value in request.POST.items():
      print ("Key: ", key)
      print ("Value: ", value)
      # data:image/png

    return HttpResponse("success")
