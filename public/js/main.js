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
        bindNav();
    } catch (error) {
        console.error('Failed to load navigation:', error);
    }
}

function bindNav() {
    highlightCurrentDemoLink();
    setupMobileMenu();
}

function highlightCurrentDemoLink() {
    const path = window.location.pathname;
    const links = document.querySelectorAll('.global-nav-links a');
    links.forEach(link => link.classList.remove('current-demo'));

    let id = 'global-nav-hub';
    if (path.includes('/home-services/'))       id = 'global-nav-home-services';
    else if (path.includes('/real-estate/'))    id = 'global-nav-real-estate';
    else if (path.includes('/fitness-centers/'))id = 'global-nav-fitness';

    const activeLink = document.getElementById(id);
    if (activeLink) activeLink.classList.add('current-demo');
}

function setupMobileMenu() {
    const hamburger = document.querySelector('.global-nav-hamburger');
    const navLinks = document.getElementById('globalNavLinks');
    console.log('setupMobileMenu:', hamburger, navLinks);
    if (!hamburger || !navLinks) {
        console.error('Hamburger or nav links not found');
        return;
    }

    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.addEventListener('click', () => {
        console.log('Hamburger clicked');
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        const expanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', String(!expanded));
        console.log('Menu active:', navLinks.classList.contains('active'));
    });
}
