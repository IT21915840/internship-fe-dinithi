# Use the official Nginx image
FROM nginx:latest

# Set the working directory
WORKDIR /usr/share/nginx/html

# Copy the website files into the container
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80
