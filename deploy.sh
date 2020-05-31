#!/bin/bash

echo "get code updates"
git pull

echo "restart container"
docker-compose restart
