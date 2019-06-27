#!/bin/bash

if [ -z "$1" ]
then
  echo "invalid branch"
else
  echo "BRANCH: $1"

  echo "copying build files"
  mkdir -p ./public
  rm -rf ./public/*

  cp -vr ./wp-site-content/ ./public/

  # remove index.html
  # we don't want to copy the following 3 files
  # TODO: maybe use find command and exclude these 3 files, to make it cleaner
  rm -rf ./public/index.html
  rm -rf ./public/404.html
  rm -rf ./public/robots.txt

  cp -vr ./root-content/ ./public/
fi