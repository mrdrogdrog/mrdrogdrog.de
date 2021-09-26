FROM nginx
COPY index.html /usr/share/nginx/html/
COPY mrdrogdrog.png /usr/share/nginx/html/
COPY party/ /usr/share/nginx/html/party/
