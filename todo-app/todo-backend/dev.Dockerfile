FROM node:24

ENV DEBUG=playground:*

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm install

USER node

CMD ["npm", "run", "dev", "--", "--host"]