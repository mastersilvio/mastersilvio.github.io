FROM node:22-alpine

# Habilita corepack para pnpm
RUN corepack enable

WORKDIR /app

# Porta padrão do Astro dev server
EXPOSE 4321

# Instala dependências e inicia o dev server
CMD ["sh", "-c", "pnpm install && pnpm dev --host 0.0.0.0"]
