FROM node:latest

RUN apt-get update && apt-get install -y git vim-tiny

RUN npm cache clear

WORKDIR /opt
RUN git clone https://github.com/redpelicans/website-ng.git website \
&& cd website \
&& yarn \
&& yarn build \
&& yarn server:build

EXPOSE 80
WORKDIR /opt/website 
ENV PORT 80
CMD yarn server:run
