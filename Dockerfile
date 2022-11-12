FROM node:16-alpine3.15
WORKDIR /app
COPY . .
RUN npm install
RUN --mount=type=secret,id=MONGO_URI \
export MONGO_URI=$(cat /run/secrets/MONGO_URI)
CMD ["npm", "run", "start"]