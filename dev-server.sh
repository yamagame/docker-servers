#!/usr/bin/env bash
docker run -it --rm  -v ${PWD}:/app -w /app -p 4000:4000 node:lts-alpine sh
