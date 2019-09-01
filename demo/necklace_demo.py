import os
import json
import io

from PIL import Image
import numpy as np

from maskrcnn_benchmark.config import cfg
from .predictor import NecklaceDemo

INPUT_IMG_DIR = "/Users/addarsh/virtualenvs/necklace/datasets/necklace_test"
OUTPUT_DIR = "/Users/addarsh/virtualenvs/necklace/datasets/necklace/output"
NECKLACE_IMG_DIR = "/Users/addarsh/virtualenvs/necklace/datasets/necklace/images"

def overlay_necklace(im, necklaceName):
  # update the config options with the config file
  cfg.merge_from_file("/Users/addarsh/virtualenvs/necklace/maskrcnn-benchmark/configs/necklace_keypoint_rcnn_R_50_FPN_1x.yaml")
  # manual override some options
  cfg.merge_from_list(["MODEL.DEVICE", "cpu"])
  cfg.merge_from_list(["OUTPUT_DIR", "/Users/addarsh/virtualenvs/necklace/maskrcnn-benchmark/output"])

  # compute predictions
  necklace_demo = NecklaceDemo(
      cfg,
      min_image_size=480,
      confidence_threshold=0.7,
  )

  predictions, nkList = necklace_demo.run_on_opencv_image(np.array(im)[:, :, [2, 1, 0]])

  if len(nkList) == 0:
    print ("Could not find any keypoints; try again")
    return None

  necklaceDir = os.path.join(NECKLACE_IMG_DIR, necklaceName)

  # Find necklace size depending on neck keypoint length.
  sizeDir = str(int(round(nkList[1][0] - nkList[0][0])))
  print ("Choosing necklace size: ", sizeDir)
  neckim = Image.open(os.path.join(os.path.join(necklaceDir, sizeDir), "image.jpg"))
  maskim = None
  try:
    maskim = Image.open(os.path.join(os.path.join(necklaceDir, sizeDir), "mask.jpg"))
  except Exception:
    maskim = neckim.convert('L')
    # Create directory.
    maskim.save(os.path.join(os.path.join(necklaceDir, sizeDir), "mask.jpg"))

  necklaceOffset = []
  # Read Necklace offset point.
  with open(os.path.join(os.path.join(necklaceDir, sizeDir), "data.json"), "r") as g:
    d = json.load(g)
    necklaceOffset = d["offset"]


  imCopy = im.copy()
  imCopy.paste(neckim, (int(nkList[0][0])-int(necklaceOffset[0]), int(nkList[0][1])-int(necklaceOffset[1])), maskim)

  imgByteArr = io.BytesIO()
  imCopy.save(imgByteArr, format="PNG")
  return imgByteArr.getvalue()
