(function(){
  function removeCalendlyBranding(){
    document
      .querySelectorAll('div[data-id="branding"]')
      .forEach(div => {
        const bannerLink = div.closest('a[href*="calendly.com"]');
        if (bannerLink) bannerLink.remove();
      });
  }

  document.addEventListener('DOMContentLoaded', () => {
    removeCalendlyBranding();
    new MutationObserver(removeCalendlyBranding)
      .observe(document.body, { childList: true, subtree: true });
  });
})();
