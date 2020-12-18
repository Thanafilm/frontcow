# get the base node image
FROM node:latest as builder

# set the working dir for container
WORKDIR /src/App

# copy the json file first
COPY ./package.json /frontend

# install npm dependencies
RUN npm install

# copy other project files
COPY . .

# build the folder
CMD [ "npm", "run", "start" ]