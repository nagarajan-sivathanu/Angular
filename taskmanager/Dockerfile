#Base Image - Nginx
FROM nginx:1.17.10

#Copy the Configuration File
COPY ./nginx.conf /etc/nginx/conf.d/nginx.conf

#Copy the compiled resources to container location
COPY ./dist/* /usr/share/nginx/html/
