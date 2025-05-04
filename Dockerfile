FROM oven/bun:latest
# 安装 git
RUN apt-get update && apt-get install -y git
WORKDIR /app
COPY package*.json ./
RUN bun install
COPY . .
RUN bun run next build --no-lint

FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]