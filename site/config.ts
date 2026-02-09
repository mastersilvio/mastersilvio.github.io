export interface SiteConfig {
  author: string;
  desc: string;
  title: string;
  ogImage: string;
  lang: string;
  base: string;
  website: string;
  social: Record<string, string>;
  googleAnalyticsId?: string;
  homeHeroDescription: string;
  blogDescription: string;
  projectsDescription: string;

  // Homepage post counts
  featuredPostsCount: number;
  latestPostsCount: number;

  // Homepage projects
  homeProjects: {
    enabled: boolean;
    count: number;
  };

  // CTA (Call-to-Action) block for blog posts
  cta: {
    enabled: boolean;
    filePath: string;
  };

  // Homepage Hero block
  hero: {
    enabled: boolean;
    filePath: string;
  };

  // Giscus comments configuration
  comments: {
    enabled: boolean;
    repo: string;
    repoId: string;
    category: string;
    categoryId: string;
    mapping: 'pathname' | 'url' | 'title' | 'og:title' | 'specific' | 'number';
    reactionsEnabled: boolean;
    emitMetadata: boolean;
    inputPosition: 'top' | 'bottom';
    theme: string;
    lang: string;
  };
}

export const SITE: SiteConfig = {
  author: 'Sílvio Meireles',
  desc: 'Blog pessoal sobre tecnologia, vida e aprendizado contínuo.',
  title: 'Sílvio Meireles',
  ogImage: 'og.png',
  lang: 'pt-BR',
  base: '/',
  website: 'https://silviomeireles.dev',
  social: {
    github: 'https://github.com/mastersilvio',
    linkedin: 'https://www.linkedin.com/in/mastersilvio/',
    x: 'https://twitter.com/silviojmeireles',
    email: 'mailto:contato@silviomeireles.dev',
  },
  googleAnalyticsId: '',
  homeHeroDescription:
    'Bacharel em Sistemas de Informação, apaixonado por Matemática, Programação e Machine Learning. Aqui compartilho pensamentos sobre tecnologia, vida e aprendizado contínuo.',
  blogDescription: 'Uma coleção de pensamentos, tutoriais e descobertas sobre tecnologia e vida.',
  projectsDescription: 'Projetos que construí e tenho orgulho. Muitos deles são open-source.',

  featuredPostsCount: 3,
  latestPostsCount: 5,

  homeProjects: {
    enabled: false,
    count: 4,
  },

  cta: {
    enabled: true,
    filePath: 'site/cta.md',
  },

  hero: {
    enabled: true,
    filePath: 'site/hero.md',
  },

  comments: {
    enabled: false,
    repo: 'mastersilvio/mastersilvio.github.io',
    repoId: '',
    category: 'General',
    categoryId: '',
    mapping: 'pathname',
    reactionsEnabled: true,
    emitMetadata: false,
    inputPosition: 'bottom',
    theme: 'preferred_color_scheme',
    lang: 'pt',
  },
};
