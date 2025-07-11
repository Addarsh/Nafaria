import os
import json
import io
import logging

from PIL import Image
import numpy as np

from maskrcnn_benchmark.config import cfg
from .predictor import NecklaceDemo

# Get an instance of a logger
logger = logging.getLogger(__name__)

NECKLACE_IMG_DIR = ""
CONFIG_FILE = ""
MODEL_FILE = ""
if 'RDS_HOSTNAME' in os.environ:
  NECKLACE_IMG_DIR = "/tmp/output/"
  CONFIG_FILE = "/tmp/output/necklace_keypoint_rcnn_R_50_FPN_1x.yaml"
  MODEL_FILE = "/tmp/output"
else:
  NECKLACE_IMG_DIR = "/Users/addarsh/virtualenvs/necklace/datasets/necklace/images"
  CONFIG_FILE = "/Users/addarsh/virtualenvs/necklace/maskrcnn-benchmark/configs/necklace_keypoint_rcnn_R_50_FPN_1x.yaml"
  MODEL_FILE = "/Users/addarsh/virtualenvs/necklace/maskrcnn-benchmark/output"

def overlay_necklace(im, necklaceName):
  # update the config options with the config file
  cfg.merge_from_file(CONFIG_FILE)
  # manual override some options
  cfg.merge_from_list(["MODEL.DEVICE", "cpu"])
  cfg.merge_from_list(["OUTPUT_DIR", MODEL_FILE])

  # compute predictions
  necklace_demo = NecklaceDemo(
      cfg,
      min_image_size=480,
      confidence_threshold=0.7,
  )

  predictions, nkList = necklace_demo.run_on_opencv_image(np.array(im)[:, :, [2, 1, 0]])
  logger.info("necklace keypoint list length: %s", len(nkList))

  if len(nkList) == 0:
    logger.error("Could not find any keypoints for given image with necklaceName: %s", necklaceName)
    return None, 0

  necklaceDir = os.path.join(NECKLACE_IMG_DIR, necklaceName)

  # Find necklace size depending on neck keypoint length.
  sizeDir = str(int(round(nkList[1][0] - nkList[0][0])))
  logger.info("Choosing necklace size: %s", sizeDir)

  if not os.path.exists(os.path.join(os.path.join(necklaceDir, sizeDir), "image.jpg")):
    logger.error("Could not find necklace size: %s for given image with necklaceName: %s", sizeDir, necklaceName)
    return None, sizeDir

  neckim = Image.open(os.path.join(os.path.join(necklaceDir, sizeDir), "image.jpg"))
  maskim = neckim.convert('L')

  necklaceOffset = []
  # Read Necklace offset point.
  with open(os.path.join(os.path.join(necklaceDir, sizeDir), "data.json"), "r") as g:
    d = json.load(g)
    necklaceOffset = d["offset"]


  imCopy = im.copy()
  imCopy.paste(neckim, (int(nkList[0][0])-int(necklaceOffset[0]), int(nkList[0][1])-int(necklaceOffset[1])), maskim)

  imgByteArr = io.BytesIO()
  imCopy.save(imgByteArr, format="PNG")
  return imgByteArr.getvalue(), sizeDir
