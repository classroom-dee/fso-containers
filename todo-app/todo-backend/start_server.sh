#!/bin/bash

set -eo pipefail

echo "Starting backend container locally."
echo "Do not use it in CI!"

IMAGE_NAME=fsopen-todo-backend
CONT_NAME=fsopen_todo_backend
PORT=3456

if docker images --format "{{.Repository}}" | grep -qw $IMAGE_NAME; then
    echo "Image $IMAGE_NAME exists."
else
    echo "No image named $IMAGE_NAME found. Building."
    docker build --progress=tty -t $IMAGE_NAME . || exit 1
fi

if docker ps --format "{{.Names}}" | grep -qw $CONT_NAME; then
    echo "Container $CONT_NAME already running."
else
    if docker ps -a --format "{{.Names}}" | grep -qw $CONT_NAME; then
        echo "Starting a stopped container $CONT_NAME."
        docker start $CONT_NAME || exit 1
    else
        echo "Starting a new container $CONT_NAME."
        docker run -d --name $CONT_NAME -p $PORT:$PORT $IMAGE_NAME || exit 1
    fi
fi