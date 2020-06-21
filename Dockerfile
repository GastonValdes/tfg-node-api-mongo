FROM node:10-alpine

WORKDIR /app
RUN adduser -D -S user1

# RUN mkdir -p ./node_modules && chown -R node:node /home/node/app

# Install app dependencies
COPY package*.json ./

# Bundle app source
COPY app.js ./
COPY controller controller/
COPY model model/
COPY node_modules node_modules/
COPY routes routes/


RUN npm install

# COPY --chown=node:node . .

EXPOSE 3000

USER user1

CMD [ "node" , "app.js" ]