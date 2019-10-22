FROM node:8.12.0-alpine
# копируем скрипты в образ
COPY scripts scripts
# копируем package.json и package-lock.json в образ
COPY package*.json scripts/
# задаем рабочую директорию в образе
WORKDIR scripts
# выполняем установку модулей
# эта установка оставит node_modules/ в образе
# можно оптимизировать, если собрать скрипт предварительно
RUN npm ci
# выполняем параллельно два скрипта
CMD node gzip.js | node brotli.js
