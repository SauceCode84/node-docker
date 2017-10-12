FROM nginx:1.13.5

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY .rethinkdb.pass /etc/nginx/.rethinkdb.pass
