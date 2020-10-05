FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# App runs on port 5000
EXPOSE 5000

RUN npm install -g typescript

# Compile our code from typscrypt to javascript
RUN tsc

# Start the server!
CMD [ "node", "dist/src/index.js" ]