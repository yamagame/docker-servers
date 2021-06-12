FROM node:lts-alpine
ARG PORT=4000
ENV PORT $PORT
EXPOSE $PORT
WORKDIR /app
COPY . .
RUN yarn install
ENTRYPOINT ["yarn", "start"]
