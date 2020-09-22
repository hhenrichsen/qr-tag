FROM node:14-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm ci --quiet

# Bundle app source
COPY . .
RUN npm run build

# Exports
EXPOSE 3000
CMD [ "npm", "run", "run" ]
