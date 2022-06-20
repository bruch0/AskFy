FROM node:16 as build
WORKDIR /usr/src/askfy
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:16
WORKDIR /usr/src/askfy
COPY package.json .
COPY package-lock.json .
RUN npm install --prod --ignore-scripts
COPY --from=build /usr/src/askfy/.next ./.next
COPY --from=build /usr/src/askfy/public ./public
EXPOSE 3000
CMD npm run start