FROM node:latest as builder

WORKDIR /root/share/repository/task_web
COPY . .
RUN npm run build

FROM light:latest
COPY --from=builder /root/share/repository/task_web/out/ /root/share/server/task_web/dist
WORKDIR /root/share/server/task_web
EXPOSE 80
CMD ["light"]