// Initialize language preference
// data-lang reflects the actual page language set by Jekyll.
// We do NOT override it with localStorage to avoid confusing the language switcher.
(function(){
  try {
    var pageLang = document.documentElement.getAttribute('data-lang') || 'pt';
    if (pageLang !== 'pt' && pageLang !== 'en') {
      document.documentElement.setAttribute('data-lang', 'pt');
    }
  } catch (e) {
    console.error('Error setting language:', e);
  }
})();

// Initialize theme preference
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    var theme = stored || (prefersLight ? 'light' : 'dark');
    var root = document.documentElement;
    root.classList.remove('theme-light', 'theme-dark');
    root.classList.add(theme === 'light' ? 'theme-light' : 'theme-dark');
  } catch (e) {
    console.error('Error setting theme:', e);
  }
})();
