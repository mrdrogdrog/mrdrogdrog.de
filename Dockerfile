FROM nginx
COPY *.html /usr/share/nginx/html/
COPY *.png /usr/share/nginx/html/
COPY party/* /usr/share/nginx/html/party/
