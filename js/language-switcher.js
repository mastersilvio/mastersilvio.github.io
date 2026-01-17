// Language switcher button functionality
(function(){
  var button = document.getElementById('language-button');
  if (!button) return;

  // Get current page language and translation key from data attributes
  var currentLang = document.documentElement.getAttribute('data-lang') || 'pt';
  var translationKey = document.documentElement.getAttribute('data-translation-key');

  // URL mapping between Portuguese and English versions
  var urlMappings = {
    'home': {
      'pt': '/',
      'en': '/en/'
    },
    'about': {
      'pt': '/about/',
      'en': '/en/about/'
    },
    'archive': {
      'pt': '/archive/',
      'en': '/en/archive/'
    },
    'tags': {
      'pt': '/tags/',
      'en': '/en/tags/'
    }
  };

  function getAlternateUrl(currentLang, translationKey) {
    if (!translationKey || !urlMappings[translationKey]) {
      // If no translation key or mapping not found, try simple URL transformation
      var currentPath = window.location.pathname;

      if (currentLang === 'pt') {
        // Going to English: add /en/ prefix
        return '/en' + currentPath;
      } else {
        // Going to Portuguese: remove /en/ prefix
        return currentPath.replace(/^\/en/, '') || '/';
      }
    }

    // Use mapping if available
    var targetLang = currentLang === 'pt' ? 'en' : 'pt';
    return urlMappings[translationKey][targetLang];
  }

  function updateButton() {
    // Show flag of the language we can switch TO, not current language
    var targetLang = currentLang === 'pt' ? 'en' : 'pt';
    button.textContent = targetLang === 'en' ? '🇺🇸' : '🇧🇷';
    button.setAttribute('aria-label', targetLang === 'en' ? 'Switch to English' : 'Mudar para Português');
    button.setAttribute('title', targetLang === 'en' ? 'Switch to English' : 'Mudar para Português');
  }

  // Initialize button with correct flag
  updateButton();

  button.addEventListener('click', function(){
    var targetLang = currentLang === 'pt' ? 'en' : 'pt';
    var alternateUrl = getAlternateUrl(currentLang, translationKey);

    // Save language preference
    try {
      localStorage.setItem('lang', targetLang);
    } catch (e) {
      console.error('Error saving language preference:', e);
    }

    // Navigate to alternate language version
    window.location.href = alternateUrl;
  });
})();
