#!/bin/sh
cd ~/webapps/personal-site
git pull origin master
yarn
npm run build
forever restart simple-web
