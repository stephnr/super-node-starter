# 1. Pulling the docker images we need
FROM node:6.4.0
MAINTAINER Stephen Rodriguez <steprodriguez10@gmail.com>

# 2. Labelling the docker image version/details
LABEL version="1.0"
LABEL description="a nodejs starter template for deploying graph based apis"

###################################
######      SETUP STACK      ######
###################################

# 3. Setup the application folder
RUN mkdir -p /usr/src/app

# 4. Change our working directory
WORKDIR /usr/src/app

# 6. Provide Environment Properties
ENV NODE_ENV=production

# 7. Copy project files into the application folder
COPY . /usr/src/app

# 8. Install Dependencies (not devDependencies)
RUN npm install

# 9. Your Custom Build Steps
RUN npm run prestart

###################################
######      EXPOSE PORT      ######
###################################

# 10. Expose the app on port 80
EXPOSE 80

###############################
######      RUN APP      ######
###############################

# 11. Run the application specific build/run commands
CMD ["node", "bin/server/web.js"]
