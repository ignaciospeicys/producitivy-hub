FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install the new Expo CLI
RUN npm install -g expo
RUN npm install -g @expo/ngrok

# Copy the rest of the application code
COPY . .

# Expose the necessary ports
EXPOSE 19006

# Start the application
CMD ["npm", "start"]
