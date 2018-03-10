FROM docker.elastic.co/beats/filebeat:6.2.2

MAINTAINER Gabriel Pellegrini

COPY ./filebeat.yml /usr/share/filebeat/filebeat.yml

COPY ./fake_logs /var/logs

USER root

RUN chmod 777 /var/logs/

RUN chown filebeat /usr/share/filebeat/filebeat.yml

USER filebeat