# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package.json package-lock.json ./

# Install the app dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Build the React app
RUN npm run build

# Install a simple HTTP server to serve the static files
RUN npm install -g serve

# Set the environment variable to production
ENV NODE_ENV=production

# Expose the port the app will run on
EXPOSE 5000

# Command to run the app
CMD ["serve", "-s", "build", "-l", "5000"]
