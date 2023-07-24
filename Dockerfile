
FROM node:16-alpine
 
WORKDIR /user/src/app2
 
COPY . .
 
RUN npm ci --omit=dev

RUN npm install @nestjs/cli
 
RUN npm run build
 
USER node
 
CMD ["npm", "run", "start:prod"]