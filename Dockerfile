# Pulling the docker images we need
FROM node:latest
MAINTAINER Stephen Rodriguez <steprodriguez10@gmail.com>

# Labelling the docker image version/details
LABEL version="1.0"
LABEL description="a nodejs starter template for deploying apis built in typescript"

###################################
######      SETUP STACK      ######
###################################

# Setup the application folder
RUN mkdir -p /usr/src/app

# Change our working directory
WORKDIR /usr/src/app

# Copy project files into the application folder
COPY . /usr/src/app

ENV PORT=80

# Install Dependencies (not devDependencies)
RUN npm install -g yarn
RUN yarn install

###################################
######      EXPOSE PORT      ######
###################################

# 10. Expose the app on port 80
EXPOSE 80

###############################
######      RUN APP      ######
###############################

# 11. Run the application specific build/run commands
CMD ["node", "bin/web.js"]
