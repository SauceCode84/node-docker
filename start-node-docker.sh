#!/bin/bash

cd /home/rlds/node-docker
docker-compose -f docker-compose.prod.yml build
docker-compose -f docker-compose.prod.yml up -d
