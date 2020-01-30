### STAGE 1: Build ###
FROM node:latest AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod


### STAGE 2: Run ###
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/lukksarna /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
