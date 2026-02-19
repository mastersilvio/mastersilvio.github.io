export type Lang = 'all' | 'pt' | 'en' | 'es';

function createLangStore() {
  let lang = $state<Lang>('all');

  function applyToDOM(newLang: Lang) {
    if (typeof document === 'undefined') return;
    if (newLang === 'all') {
      document.documentElement.removeAttribute('data-filter-lang');
    } else {
      document.documentElement.setAttribute('data-filter-lang', newLang);
    }
  }

  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('filter-lang') as Lang | null;
    if (saved && ['all', 'pt', 'en', 'es'].includes(saved)) {
      lang = saved;
    }
    applyToDOM(lang);
  }

  function set(newLang: Lang) {
    lang = newLang;
    if (typeof window !== 'undefined') {
      localStorage.setItem('filter-lang', newLang);
    }
    applyToDOM(newLang);
  }

  function cycle() {
    if (lang === 'all') set('pt');
    else if (lang === 'pt') set('en');
    else if (lang === 'en') set('es');
    else set('all');
  }

  return {
    get current() {
      return lang;
    },
    set,
    cycle,
  };
}

export const langFilter = createLangStore();
