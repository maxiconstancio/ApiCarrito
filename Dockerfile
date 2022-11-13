FROM node:16-alpine3.15
WORKDIR /app
COPY . .
RUN npm install
ENV MONGO_URI=${MONGO_URI}
RUN MONGO_URI=$MONGO_URI
CMD ["npm", "run", "start"]