#!/bin/bash
yarn build
docker build -t linxianer12/backend-scb:latest .
docker push linxianer12/backend-scb:latest