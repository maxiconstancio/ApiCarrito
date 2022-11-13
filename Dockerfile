FROM node:16-alpine3.15
ARG mongo_uri
ENV MONGO_URI = $mongo_uri
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "run", "start"]