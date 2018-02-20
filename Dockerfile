# Pull base image.
FROM node:alpine

# Set Work Dir
WORKDIR /app

# Copy files to install
ADD ./bin/ /app/bin/
ADD ./config/ /app/config/
ADD ./data/ /app/data/
ADD ./public/ /app/public/
ADD ./routes/ /app/routes/
ADD ./views/ /app/views/
ADD ./app.js /app
ADD ./package.json /app
ADD ./package-lock.json /app

#Install node modules
RUN cd /app && \
    npm install