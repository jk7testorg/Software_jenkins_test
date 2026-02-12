# Use official Node.js image
FROM node:18-bookworm-slim

# Create app directory inside container
WORKDIR /usr/src/app

# Copy package.json first (better layer caching)
COPY package*.json ./

# Install dependencies (none for now, but good practice)
RUN npm install

# Copy rest of the app
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]