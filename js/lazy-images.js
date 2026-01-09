// Add lazy loading to all images
(function() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addLazyLoading);
  } else {
    addLazyLoading();
  }

  function addLazyLoading() {
    // Get all images in the main content area
    var images = document.querySelectorAll('#main_content img');

    images.forEach(function(img) {
      // Only add loading="lazy" if not already set
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }

      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
    });
  }
})();
