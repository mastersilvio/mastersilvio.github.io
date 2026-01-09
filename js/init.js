// Initialize language preference
(function(){
  try {
    var storedLang = localStorage.getItem('lang');
    var defaultLang = document.documentElement.getAttribute('data-lang') || 'pt';
    var lang = (storedLang === 'pt' || storedLang === 'en') ? storedLang : defaultLang;
    document.documentElement.setAttribute('data-lang', lang);
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
