#!/usr/bin/env bash

python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py runserver 0.0.0.0:8000 &

mkdir -p /Users/addarsh/virtualenvs/eb-necklace/necklace/static
cd ui
ng build --watch --outputPath=/Users/addarsh/virtualenvs/eb-necklace/necklace/static/
