# 阶段 1：构建阶段
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# 阶段 2：部署阶段（使用 nginx 提供静态文件）
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
