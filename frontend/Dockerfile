FROM node:lts

WORKDIR /frontend
EXPOSE 5173

COPY package.json /frontend
COPY yarn.lock /frontend

RUN yarn install

COPY . /frontend

CMD ["yarn", "dev", "--host", "0.0.0.0"]