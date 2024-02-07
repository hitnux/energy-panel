FROM node:20
WORKDIR /home/node/app
COPY energy-panel-project /home/node/app
RUN npm install
CMD npm run start
EXPOSE 3000