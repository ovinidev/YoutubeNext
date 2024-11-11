# Use the official Node.js 18 base image for Next.js
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package manager lock file and package.json
COPY package.json pnpm-lock.yaml ./

# Install pnpm package manager
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN pnpm run build

# Use a minimal Node.js base image for production
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /app

# Install pnpm package manager
RUN npm install -g pnpm

# Copy only the necessary files from the builder stage
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["pnpm", "run", "start"]

# Example command to run the application
# docker run -p 3000:3000 <image-name>