// nav-init.js

(function waitForNav() {
  // look for the hamburger button
  const ham = document.querySelector('.global-nav-hamburger');
  if (ham && typeof setupMobileMenu === 'function') {
    setupMobileMenu();
  } else {
    setTimeout(waitForNav, 50);
  }
})();
