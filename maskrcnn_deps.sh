#!/usr/bin/env bash

pip install --upgrade pip

git clone https://github.com/cocodataset/cocoapi.git
cd cocoapi/PythonAPI
python setup.py build_ext install
cd ..

git clone https://github.com/NVIDIA/apex.git
cd apex
git checkout 880ab925bce9f817a93988b021e12db5f67f7787
python setup.py install --cpp_ext
cd ..

git clone https://github.com/facebookresearch/maskrcnn-benchmark
cd maskrcnn-benchmark
python setup.py build develop
cd ..
