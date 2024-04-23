FROM node

WORKDIR /app

COPY . .

# Package.json dependencies
RUN npm install

# Port
EXPOSE 3000

CMD [ "npm", "start" ]