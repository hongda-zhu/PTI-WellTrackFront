FROM oven/bun:latest
RUN apt-get update && apt-get install -y git
WORKDIR /app
COPY package*.json ./
RUN bun install
COPY . .
RUN bun run build

FROM nginx:alpine
# 修改这里的路径，确保指向正确的输出目录
COPY --from=0 /app/out /usr/share/nginx/html
# 添加一个默认的nginx配置文件
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]