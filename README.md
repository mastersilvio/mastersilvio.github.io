# Sílvio Meireles - Blog Pessoal

Blog pessoal bilíngue (Português/Inglês) hospedado em [silviomeireles.dev](https://silviomeireles.dev).

Construído com o tema [Spaceship](https://github.com/alec-c4/spaceship) para Astro.

## Tech Stack

- [Astro 5](https://astro.build/) - Framework de geração de sites estáticos
- [Svelte 5](https://svelte.dev/) - Componentes UI reativos
- [Tailwind CSS 4](https://tailwindcss.com/) - Framework CSS utilitário
- [MDX](https://mdxjs.com/) - Markdown com componentes
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática
- [Shiki](https://shiki.matsu.io/) - Syntax highlighting
- GitHub Pages - Hospedagem

## Funcionalidades

- Blog bilíngue (PT/EN) com links entre traduções
- Dark/Light mode
- Busca rápida (Cmd+K)
- RSS Feed e Sitemap automáticos
- SEO otimizado com JSON-LD
- Imagens OG geradas automaticamente
- Table of Contents interativo
- Compartilhamento social
- Sistema de comentários (Giscus)
- Diagramas Mermaid no Markdown

## Pré-requisitos

- [Node.js](https://nodejs.org/) v22+
- [pnpm](https://pnpm.io/) v10+
- [Docker](https://www.docker.com/) (opcional)

## Execução Local

### Com pnpm

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento (http://localhost:4321)
pnpm dev

# Gerar build de produção
pnpm build

# Pré-visualizar build de produção
pnpm preview
```

### Com Docker

```bash
# Iniciar com Docker Compose (http://localhost:4321)
docker compose up

# Ou construir e executar manualmente
docker build -t blog .
docker run -p 4321:4321 blog
```

## Estrutura do Projeto

```
├── .github/workflows/     # GitHub Actions (deploy automático)
├── site/                   # Dados do usuário (separado do engine)
│   ├── assets/             # Assets estáticos (favicon, fotos, CNAME)
│   ├── content/
│   │   ├── about/          # Página Sobre
│   │   ├── posts/          # Blog posts (PT e EN)
│   │   ├── projects/       # Projetos
│   │   └── appearances/    # Palestras e aparições
│   ├── config.ts           # Configuração do site
│   ├── hero.md             # Texto do hero da homepage
│   └── cta.md              # Call-to-action dos posts
├── src/                    # Core engine (Spaceship)
│   ├── components/         # Componentes Astro e Svelte
│   ├── layouts/            # Layouts
│   ├── lib/                # Utilitários e helpers
│   ├── pages/              # Páginas e rotas
│   └── styles/             # Estilos globais
├── astro.config.mjs        # Configuração do Astro
├── Dockerfile              # Container para desenvolvimento
├── docker-compose.yml      # Orquestração Docker
└── package.json            # Dependências e scripts
```

## Criando um Novo Post

1. Crie um arquivo `.md` em `site/content/posts/`
2. Adicione o frontmatter:

```yaml
---
title: 'Título do Post'
description: 'Breve descrição do post'
pubDate: 2026-01-01
tags: ['Tag1', 'Tag2']
lang: 'pt'
slug: 'titulo-do-post-pt'
translatedPosts:
  en: 'post-title-en'
---

Conteúdo do post em Markdown...
```

3. Para posts bilíngues, crie outro arquivo com o slug da tradução e adicione `translatedPosts` referenciando o par.

## Deploy

O deploy é automático via GitHub Actions. Ao fazer push na branch `master`, o workflow:

1. Instala as dependências com pnpm
2. Executa o build do Astro
3. Publica no GitHub Pages

O site é servido em [silviomeireles.dev](https://silviomeireles.dev) via domínio customizado (CNAME).

## Licença

MIT
