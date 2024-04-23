FROM node

WORKDIR /app

COPY . .

# Package.json dependencies
RUN npm install

# Port
EXPOSE 80

CMD [ "npm", "start" ]