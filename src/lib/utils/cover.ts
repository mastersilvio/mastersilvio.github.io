/**
 * Deterministic cover art for posts.
 *
 * Every post gets an image on its card. When the frontmatter has a `cover`
 * (a path inside `site/assets` or an absolute URL) that image is used.
 * Otherwise a cover is generated from the post's first tag: a gradient, a
 * geometric pattern and an icon, all picked deterministically from the post id
 * so the same post always renders the same art.
 */

export interface CoverTheme {
  /** Theme key, useful for debugging/tests. */
  key: string;
  /** Gradient stops, from top-left to bottom-right. */
  from: string;
  via: string;
  to: string;
  /** Stroke-based icon paths, drawn on a 24x24 grid. */
  icon: string[];
}

const THEMES = {
  ai: {
    from: '#7c3aed',
    via: '#6366f1',
    to: '#2563eb',
    icon: [
      'M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3',
      'M6 6h12v12H6z',
      'M10 10h4v4h-4z',
    ],
  },
  tech: {
    from: '#0ea5e9',
    via: '#3b82f6',
    to: '#4f46e5',
    icon: ['m16 18 6-6-6-6', 'm8 6-6 6 6 6', 'm14 3-4 18'],
  },
  dev: {
    from: '#06b6d4',
    via: '#0891b2',
    to: '#0f766e',
    icon: ['m4 17 6-6-6-6', 'M12 19h8'],
  },
  philosophy: {
    from: '#f59e0b',
    via: '#ea8a0b',
    to: '#c2410c',
    icon: [
      'M9 18h6M10 22h4',
      'M15.1 14c.2-1 .7-1.7 1.4-2.5A4.7 4.7 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.8.8 1.2 1.5 1.4 2.5',
    ],
  },
  stoicism: {
    from: '#64748b',
    via: '#475569',
    to: '#1e293b',
    icon: ['m8 3 4 8 5-5 5 15H2Z'],
  },
  wisdom: {
    from: '#d97706',
    via: '#b45309',
    to: '#78350f',
    icon: [
      'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
      'M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4',
    ],
  },
  books: {
    from: '#e11d48',
    via: '#be123c',
    to: '#881337',
    icon: [
      'M12 7v14',
      'M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z',
    ],
  },
  writing: {
    from: '#db2777',
    via: '#c026d3',
    to: '#7e22ce',
    icon: ['M12 20h9', 'M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z'],
  },
  productivity: {
    from: '#16a34a',
    via: '#15803d',
    to: '#166534',
    icon: ['M22 11.1V12a10 10 0 1 1-5.9-9.1', 'M22 4 12 14l-3-3'],
  },
  management: {
    from: '#f97316',
    via: '#ea580c',
    to: '#9a3412',
    icon: [
      'M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z',
      'M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16',
    ],
  },
  career: {
    from: '#0d9488',
    via: '#0f766e',
    to: '#115e59',
    icon: ['M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z', 'm16.2 7.8-2.1 6.4-6.4 2.1 2.1-6.4z'],
  },
  finance: {
    from: '#059669',
    via: '#047857',
    to: '#065f46',
    icon: ['m22 7-8.5 8.5-5-5L2 17', 'M16 7h6v6'],
  },
  math: {
    from: '#4f46e5',
    via: '#4338ca',
    to: '#312e81',
    icon: ['M18 7V4H6l6 8-6 8h12v-3'],
  },
  psychology: {
    from: '#a855f7',
    via: '#9333ea',
    to: '#6b21a8',
    icon: [
      'M12 5a3 3 0 0 0-6 0 3 3 0 0 0-1.5 5.6A3 3 0 0 0 6 16a3 3 0 0 0 6 1z',
      'M12 5a3 3 0 0 1 6 0 3 3 0 0 1 1.5 5.6A3 3 0 0 1 18 16a3 3 0 0 1-6 1z',
      'M12 5v13',
    ],
  },
  life: {
    from: '#fb7185',
    via: '#f43f5e',
    to: '#be123c',
    icon: [
      'M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z',
    ],
  },
  faith: {
    from: '#eab308',
    via: '#d97706',
    to: '#92400e',
    icon: ['M10 2h4v6h6v4h-6v10h-4V12H4V8h6z'],
  },
  creativity: {
    from: '#d946ef',
    via: '#a855f7',
    to: '#6366f1',
    icon: [
      'm12 3 1.9 5.8L20 10.7l-6.1 1.9L12 18.5l-1.9-5.9L4 10.7l6.1-1.9z',
      'M19 15.5 20 18l2.5 1-2.5 1-1 2.5-1-2.5L15.5 19l2.5-1z',
    ],
  },
  reflection: {
    from: '#38bdf8',
    via: '#6366f1',
    to: '#4c1d95',
    icon: ['M7.9 20A9 9 0 1 0 4 16.1L2 22z', 'M8 12h.01M12 12h.01M16 12h.01'],
  },
  future: {
    from: '#22d3ee',
    via: '#0ea5e9',
    to: '#4f46e5',
    icon: [
      'M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9 0z',
      'm12 15-3-3a22 22 0 0 1 2-4A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22 22 0 0 1-4 2z',
    ],
  },
  japan: {
    from: '#f87171',
    via: '#dc2626',
    to: '#7f1d1d',
    icon: ['M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16z', 'M2 8h20'],
  },
  growth: {
    from: '#84cc16',
    via: '#65a30d',
    to: '#3f6212',
    icon: ['M12 22V10', 'M12 12C12 7 8 4 3 4c0 5 4 8 9 8z', 'M12 14c0-4 3-7 9-7 0 4-4 7-9 7z'],
  },
  indie: {
    from: '#fb923c',
    via: '#f43f5e',
    to: '#a21caf',
    icon: [
      'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z',
    ],
  },
  default: {
    from: '#71717a',
    via: '#52525b',
    to: '#27272a',
    icon: ['M12 3v18M3 12h18', 'M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4'],
  },
} as const satisfies Record<string, Omit<CoverTheme, 'key'>>;

type ThemeKey = keyof typeof THEMES;

/** Tag (normalized: lowercase, no accents) -> theme. Covers pt / en / es. */
const TAG_THEMES: Record<string, ThemeKey> = {
  ai: 'ai',
  ia: 'ai',

  technology: 'tech',
  tecnologia: 'tech',

  development: 'dev',
  desenvolvimento: 'dev',
  desarrollo: 'dev',

  philosophy: 'philosophy',
  filosofia: 'philosophy',

  stoicism: 'stoicism',
  estoicismo: 'stoicism',

  wisdom: 'wisdom',
  sabedoria: 'wisdom',
  sabiduria: 'wisdom',

  books: 'books',
  livros: 'books',
  libros: 'books',
  reading: 'books',
  leitura: 'books',
  lectura: 'books',
  bible: 'faith',
  biblia: 'faith',

  writing: 'writing',
  escrita: 'writing',
  escritura: 'writing',

  productivity: 'productivity',
  produtividade: 'productivity',
  productividad: 'productivity',

  management: 'management',
  gestao: 'management',
  gestion: 'management',
  business: 'management',
  negocios: 'management',

  career: 'career',
  carreira: 'career',
  carrera: 'career',
  work: 'career',
  trabalho: 'career',
  trabajo: 'career',
  jobs: 'career',
  empregos: 'career',
  empleo: 'career',

  finance: 'finance',
  financas: 'finance',
  finanzas: 'finance',
  investment: 'finance',
  investimento: 'finance',
  inversion: 'finance',

  mathematics: 'math',
  matematica: 'math',
  matematicas: 'math',
  probability: 'math',
  probabilidade: 'math',

  psychology: 'psychology',
  psicologia: 'psychology',

  life: 'life',
  vida: 'life',

  faith: 'faith',
  fe: 'faith',

  creativity: 'creativity',
  criatividade: 'creativity',
  creatividad: 'creativity',
  creation: 'creativity',
  criacao: 'creativity',
  creacion: 'creativity',

  reflection: 'reflection',
  reflexao: 'reflection',
  reflexion: 'reflection',
  thoughts: 'reflection',
  pensamentos: 'reflection',
  pensamientos: 'reflection',

  future: 'future',
  futuro: 'future',

  japan: 'japan',
  japao: 'japan',
  japon: 'japan',

  personaldevelopment: 'growth',
  desenvolvimentopessoal: 'growth',
  desarrollopersonal: 'growth',

  indiehacker: 'indie',
  entrepreneurship: 'indie',
  empreendedorismo: 'indie',
  emprendimiento: 'indie',
};

export function normalizeTag(tag: string): string {
  return tag
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
}

/** Small, stable string hash (FNV-1a). */
function hash(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function getCoverTheme(tags: string[] = []): CoverTheme {
  for (const tag of tags) {
    const key = TAG_THEMES[normalizeTag(tag)];
    if (key) return { key, ...THEMES[key] };
  }
  return { key: 'default', ...THEMES.default };
}

export interface Cover {
  /** External image, when the post defines `cover` in the frontmatter. */
  image?: string;
  theme: CoverTheme;
  /** 0-3: dots, grid, diagonals or rings. */
  pattern: number;
  /** Small hue shift (deg) so posts sharing a tag don't look identical. */
  hue: number;
  /** Unique, DOM-safe id used for the SVG gradient/pattern defs. */
  uid: string;
  /** Decorative blobs, positioned from the post id. */
  blobs: { cx: number; cy: number; r: number }[];
}

export function getCover(input: { id: string; tags?: string[]; cover?: string }): Cover {
  const seed = hash(input.id);
  const theme = getCoverTheme(input.tags);

  return {
    image: input.cover,
    theme,
    pattern: seed % 4,
    hue: ((seed >> 5) % 31) - 15,
    uid: `${theme.key}-${seed.toString(36)}`,
    blobs: [
      { cx: 40 + ((seed >> 3) % 320), cy: 20 + ((seed >> 7) % 60), r: 60 + ((seed >> 11) % 50) },
      { cx: 60 + ((seed >> 13) % 300), cy: 150 + ((seed >> 17) % 70), r: 40 + ((seed >> 19) % 60) },
    ],
  };
}
