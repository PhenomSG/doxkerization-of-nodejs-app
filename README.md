# dockerization-of-nodejs-app
This repo helps in understanding docker.

## Docker Image

This repository is also available as a Docker image. You can pull and run the containerized Node.js application directly without needing to clone the repository locally.

### Getting Started with Docker

To use the Docker image:

```bash
# Pull the image
docker pull phenomsg/docker-sg

# Run the container
docker run -p 3000:3000 phenomsg/docker-sg
```

For more details on building and using the Docker image, see the `docker-sg/` directory which contains the Dockerfile and application files.
