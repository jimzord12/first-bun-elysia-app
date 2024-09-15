# Use the official Bun image as the base image
FROM oven/bun:alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy only the package.json and bun.lockb files first to leverage Docker's cache
COPY package.json bun.lockb ./

# Install dependencies using Bun
RUN bun install

# Copy the rest of the application files to the working directory
COPY . .

# Build the application if necessary (for example, if you have a build step)
# RUN bun build

# Stage 2: Create the final lightweight image
FROM oven/bun:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app /app

# Expose the port that your server will listen on
EXPOSE 3000

# Command to run your Elysia web server application
CMD ["bun", "run", "start"]
