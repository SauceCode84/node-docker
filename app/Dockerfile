FROM node:8.6.0-slim

# create app directory
WORKDIR /usr/scr/app

# install app dependencies
RUN npm install -g nodemon

# export port
EXPOSE 8080

# run start command
CMD [ "npm", "run", "dev" ]