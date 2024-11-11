# Etapa de build
FROM node:18-alpine AS builder

# Instala pnpm
RUN npm install -g pnpm

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de configuração do projeto
COPY package.json pnpm-lock.yaml ./

# Instala as dependências do projeto
RUN pnpm install

# Copia o restante do código do projeto
COPY . .

# Compila o projeto Next.js
RUN pnpm build

# Etapa de produção
FROM node:18-alpine AS runner

# Instala pnpm
RUN npm install -g pnpm

# Define o diretório de trabalho
WORKDIR /app

# Copia as dependências instaladas e o build do projeto da etapa anterior
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./

# Define a variável de ambiente para produção
ENV NODE_ENV=production

# Expõe a porta que a aplicação irá rodar
EXPOSE 3000

# Comando para iniciar a aplicação Next.js
CMD ["pnpm", "start"]
