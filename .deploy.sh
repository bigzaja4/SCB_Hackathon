#!/bin/bash
yarn build
docker build -t linxianer12/frontend-scb:latest .
docker push linxianer12/frontend-scb:latest