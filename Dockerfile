FROM node:20 AS build
WORKDIR /app

# Copia o código-fonte
COPY . .

# Define a variável de ambiente no tempo de build
ARG BACKEND_URL
ENV BACKEND_URL=${BACKEND_URL}

# Executa o build do Angular com o valor injetado
RUN npm install && \
    BACKEND_URL=$BACKEND_URL npm run build -- --configuration=development

# Etapa final: servidor nginx
FROM nginx:alpine
COPY --from=build /app/dist/frontend-minikube /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
