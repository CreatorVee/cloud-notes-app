# Dockerfile for frontend
FROM node:18
WORKDIR /app
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build
# Serve the build with a simple server
npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build"]

