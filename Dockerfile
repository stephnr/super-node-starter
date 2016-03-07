FROM node:5.7.1
# Create the app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# Install npm dependencies
COPY package.json /usr/src/app
RUN npm install
# Install global dependencies
RUN npm install -g typings
RUN npm install -g webpack
RUN npm install -g foreman
# Install typescript dependencies
COPY typings.json /usr/src/app
RUN typings install
# Bundle app source
COPY . /usr/src/app
# Bundle client dependencies
RUN webpack
# Open the http port
EXPOSE 8080
# Start the app
CMD [ "node", "build/web.js" ]
