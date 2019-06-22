# FROM nginx:latest
# run apt-get -y update && apt-get install -y vim
# COPY build /usr/share/nginx/html
# expose 80

# base image
FROM node:9.11
# set working directory
WORKDIR /usr/src/app
# install and cache app dependencies
COPY . .
EXPOSE 3000

# start app
CMD ["npm", "run", "start"]