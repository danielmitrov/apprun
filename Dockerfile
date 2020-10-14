FROM node:14

WORKDIR /opt/Apprun
COPY . .

RUN groupadd app && useradd -m -g app app && chown app:app -R /opt/Apprun
USER app

RUN npm ci && npm run build

EXPOSE 8080

CMD [ "npm", "start" ]
