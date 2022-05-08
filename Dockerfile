FROM node

WORKDIR /app/frontend
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/frontend
COPY package-lock.json ./
RUN npm install npm@8.9.0
COPY . .
EXPOSE 3000
CMD ["npm", "start"]