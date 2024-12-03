# Use a imagem base do Node.js
FROM node:22

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /src

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências da aplicação
RUN npm install

# Copie o restante do código da aplicação para o diretório de trabalho
COPY . .

# Compile o código TypeScript usando o Webpack
RUN npx webpack

# Exponha a porta que a aplicação irá rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "dist/main.js"]