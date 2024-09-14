# Use the official Bun image as the base image
FROM oven/bun:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the application files to the working directory
COPY . .

# Install dependencies using Bun (if you have a package.json)
RUN bun install

# Expose the port that your server will listen on
EXPOSE 3000

# Command to run your Elysia web server application
CMD ["bun", "run", "start"]
