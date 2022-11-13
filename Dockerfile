FROM node:16-alpine3.15
ARG mongo_uri
ARG port
ENV MONGO_URI=$mongo_uri
ENV PORT=$port
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "run", "start"]