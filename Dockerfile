FROM oven/bun:1.1.8 as build

WORKDIR /app
RUN apt-get update && apt-get install -y git

# --- 环境变量处理 ---
ARG NEXT_PUBLIC_API_URL # 声明一个构建参数 (示例)
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL 

COPY ./package.json ./bun.lockb ./ 
RUN bun install --frozen-lockfile 

COPY . .

# --- 不再覆盖 next.config.js ---
# 确保仓库里的 next.config.js 正确配置了 output: "export" 等

# 构建时使用环境变量
RUN bun run build

# --- 生产阶段 ---
FROM nginx:alpine
COPY --from=build /app/out /usr/share/nginx/html
# ... (rest of your Nginx setup)