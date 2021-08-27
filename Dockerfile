FROM node:12.16.3-alpine as build

WORKDIR /app

COPY package*.jason
RUN npm install
COPY  . . 
RUN npm run build

