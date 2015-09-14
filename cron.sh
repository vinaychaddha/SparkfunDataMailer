#!/bin/bash

#CronJob configuration section
cd "$(dirname "$0")" #change to current directory as working directory

#App section
node app.js >> out.log
