#Dockerfile logstash

FROM docker.elastic.co/logstash/logstash:6.2.2

MAINTAINER Gabriel Pellegrini

RUN rm -f /usr/share/logstash/logstash.conf

COPY . /usr/share/logstash

WORKDIR  /usr/share/logstash

ENTRYPOINT ["logstash","-f","logstash.conf"]

EXPOSE 5044

