FROM node:10-alpine
ARG SCRAPED_DIR
ARG VERSION=v0.2.1

RUN apk update && \
    apk add git

RUN git clone --depth 1 https://github.com/gaggle/repo-lister /home/repo-lister -b $VERSION && \
    chmod -R 0777 /home/repo-lister
WORKDIR /home/repo-lister
RUN npm ci
RUN rm static/repos && \
    ln -s $SCRAPED_DIR static/repos
COPY scripts/export-via-docker /home/export-via-docker

ENTRYPOINT ["/home/export-via-docker"]
