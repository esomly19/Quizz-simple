# étape de build
FROM node:lts-alpine as build-stage
WORKDIR /QUEZZIE
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run serve

# étape de production
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]