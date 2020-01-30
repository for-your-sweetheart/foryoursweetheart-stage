#!/bin/bash
echo "copying build files"
mkdir -p ./firebase-dist
pwd
ls -la
rm -rf ./firebase-dist/*

cp -vr ./wp-site-content/* ./firebase-dist/

# remove index.html
# we don't want to copy the following 3 files
# TODO: maybe use find command and exclude these 3 files, to make it cleaner
rm -rf ./firebase-dist/index.html
rm -rf ./firebase-dist/404.html
rm -rf ./firebase-dist/robots.txt

cp -vr ./root-content/* ./firebase-dist/