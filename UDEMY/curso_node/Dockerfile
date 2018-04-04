FROM node:8.9.4

MAINTAINER Gabriel Pellegrini

ENV HOME=/home/app

WORKDIR $HOME/portal/

COPY . $HOME/portal

RUN npm install npm

RUN npm install -g nodemon
