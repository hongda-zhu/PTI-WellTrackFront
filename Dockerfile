# Frontend Dockerfile
FROM oven/bun:latest


# Set working directory
WORKDIR /app

# Copy bun.lockb and package.json (if available)
COPY ./package.json ./

# Install dependencies with Bun
RUN bun install

# Copy the rest of the frontend files
COPY . .


# Expose the frontend port
EXPOSE 3000

# Serve the app
CMD ["bun", "run", "dev"]
