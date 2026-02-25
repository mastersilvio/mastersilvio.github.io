export const ui = {
  featured: { pt: 'Destaques', en: 'Featured', es: 'Destacados' },
  latestPosts: { pt: 'Publicações Recentes', en: 'Latest Posts', es: 'Publicaciones Recientes' },
  viewAllPosts: { pt: 'Ver todos os posts', en: 'View all posts', es: 'Ver todas las publicaciones' },
  archive: { pt: 'Arquivo', en: 'Archive', es: 'Archivo' },
  talksAppearances: { pt: 'Palestras e Aparições', en: 'Talks & Appearances', es: 'Charlas y Apariciones' },
  viewAppearances: { pt: 'Ver aparições', en: 'View appearances', es: 'Ver apariciones' },
  connect: { pt: 'Conecte-se', en: 'Connect', es: 'Conéctate' },
  about: { pt: 'Sobre', en: 'About', es: 'Acerca de' },
  posts: { pt: 'Posts', en: 'Posts', es: 'Posts' },
  projects: { pt: 'Projetos', en: 'Projects', es: 'Proyectos' },
  allProjects: { pt: 'Todos os Projetos', en: 'All Projects', es: 'Todos los Proyectos' },
  visitSite: { pt: 'Visitar Site', en: 'Visit Site', es: 'Visitar Sitio' },
  viewDetails: { pt: 'Ver Detalhes', en: 'View Details', es: 'Ver Detalles' },
  loading: { pt: 'Carregando conteúdo...', en: 'Loading content...', es: 'Cargando contenido...' },
  blog: { pt: 'Blog', en: 'Blog', es: 'Blog' },
  allPosts: { pt: 'Todos os Posts', en: 'All Posts', es: 'Todas las Publicaciones' },
  readMore: { pt: 'Leia mais', en: 'Read more', es: 'Leer más' },
  popularTopics: { pt: 'Tópicos Populares', en: 'Popular Topics', es: 'Temas Populares' },
  projectsDescription: { pt: 'Projetos que construí e tenho orgulho.', en: "Projects I've built and am proud of.", es: 'Proyectos que construí y de los que estoy orgulloso.' },
} as const;

export type UiKey = keyof typeof ui;
export type LangCode = 'pt' | 'en' | 'es';
