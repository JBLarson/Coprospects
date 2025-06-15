// main.js

document.addEventListener('DOMContentLoaded', init);

async function init() {
    console.log('main.js loaded');
    const placeholder = document.getElementById('global-nav-placeholder');
    if (!placeholder) {
        console.error('Nav placeholder missing');
        return;
    }

    try {
        const response = await fetch('/_global-nav.html', { cache: 'no-store' });
        if (!response.ok) throw new Error('Fetch failed: ' + response.status);
        placeholder.innerHTML = await response.text();
        console.log('Navigation injected');
        // Delay bindNav until next microtask to allow styles to apply
        setTimeout(bindNav, 0);
    } catch (error) {
        console.error('Failed to load navigation:', error);
    }
}

function bindNav() {
    // Desktop dropdown functionality
    const desktopSubmenuTriggers = document.querySelectorAll('.coprospects-global-nav__desktop-links .nav-link--submenu-trigger');
    console.log('bindNav: desktopSubmenuTriggers found', desktopSubmenuTriggers.length);
    if (desktopSubmenuTriggers.length === 0) {
        console.warn('No desktop submenu triggers found');
    }

    desktopSubmenuTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(event) {
            console.log('desktop trigger click', this.textContent);
            event.preventDefault();
            event.stopPropagation();

            const navItem = this.parentElement;
            const willPin = !navItem.classList.contains('is-pinned');

            // Reset all nav items
            desktopSubmenuTriggers.forEach(t => {
                t.parentElement.classList.remove('is-pinned');
                t.setAttribute('aria-expanded', 'false');
            });

            if (willPin) {
                navItem.classList.add('is-pinned');
                this.setAttribute('aria-expanded', 'true');
                console.log('Pinned', navItem);
            }
        });
    });

    // Optional mobile functionality (will silently skip if elements absent)
    const mobileToggle = document.querySelector('.coprospects-global-nav__mobile-toggle');
    const mobileMenu  = document.querySelector('.coprospects-global-nav__mobile-links-overlay');
    const mobileSubmenuTriggers = document.querySelectorAll('.coprospects-global-nav__mobile-links-overlay .nav-link--submenu-trigger');

    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.classList.toggle('is-active');
            document.body.classList.toggle('coprospects-mobile-menu--is-open');
        });

        mobileSubmenuTriggers.forEach(trigger => {
            trigger.addEventListener('click', function(event) {
                event.preventDefault();
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                this.setAttribute('aria-expanded', !isExpanded);
                const submenu = document.getElementById(this.getAttribute('aria-controls'));
                submenu.style.maxHeight = isExpanded ? '0' : submenu.scrollHeight + 'px';
            });
        });
    }
}

