// Theme toggle button functionality
(function(){
  var button = document.getElementById('theme-button');
  if (!button) return;

  function currentThemeIsLight() {
    return document.documentElement.classList.contains('theme-light');
  }

  function setTheme(theme) {
    var root = document.documentElement;
    root.classList.remove('theme-light', 'theme-dark');
    root.classList.add(theme === 'light' ? 'theme-light' : 'theme-dark');
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      console.error('Error saving theme:', e);
    }
  }

  function updateButton() {
    var isLight = currentThemeIsLight();
    button.textContent = isLight ? '☀️' : '🌙';
    button.setAttribute('aria-label', isLight ? 'Tema claro' : 'Tema escuro');
    button.setAttribute('title', isLight ? 'Tema claro' : 'Tema escuro');
  }

  // Initialize icon on load
  updateButton();

  button.addEventListener('click', function(){
    var next = currentThemeIsLight() ? 'dark' : 'light';
    setTheme(next);
    updateButton();
  });
})();
