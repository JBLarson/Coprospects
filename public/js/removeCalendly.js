(function(){
  function removeCalendlyBranding(){
    document
      .querySelectorAll('div[data-id="branding"]')
      .forEach(div => {
        const bannerLink = div.closest('a[href*="calendly.com"]');
        if (bannerLink) bannerLink.remove();
      });
  }

  function startWatching(){
    // once to catch any already-inserted banners
    removeCalendlyBranding();

    // catch future injections
    new MutationObserver(removeCalendlyBranding)
      .observe(document.body, { childList: true, subtree: true });

    // poll for Calendly iframe then hook its load
    const poll = setInterval(() => {
      const iframe = document.querySelector('.calendly-inline-widget iframe');
      if (!iframe) return;
      clearInterval(poll);
      iframe.addEventListener('load', removeCalendlyBranding);
    }, 300);
  }

  document.addEventListener('DOMContentLoaded', startWatching);
})();
