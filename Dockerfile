FROM node:16-alpine3.15
WORKDIR /app
COPY . .
RUN npm install
ENV MONGO_URI="mongodb+srv://maxi:33772983@cluster0.ua74h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
CMD ["npm", "run", "start"]