// main.js

// Toggle mobile menu
function setupMobileMenu() {
    const hamburger = document.querySelector('.global-nav-hamburger');
    const navLinks = document.getElementById('globalNavLinks');

    if (!hamburger || !navLinks) {
        console.error('setupMobileMenu: elements not found');
        return;
    }

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        const expanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', String(!expanded));
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Highlight current link
function highlightCurrentDemoLink() {
    const path = window.location.pathname;
    const links = document.querySelectorAll('.global-nav-links a');
    links.forEach(a => a.classList.remove('current-demo'));

    let id = 'global-nav-hub';
    if (path.includes('/home-services/')) id = 'global-nav-home-services';
    else if (path.includes('/real-estate/')) id = 'global-nav-real-estate';
    else if (path.includes('/fitness-centers/')) id = 'global-nav-fitness';

    const active = document.getElementById(id);
    if (active) active.classList.add('current-demo');
}

// Load and inject global nav
async function loadGlobalNav() {
    const placeholder = document.getElementById('global-nav-placeholder');
    if (!placeholder) return console.error('Nav placeholder missing');

    try {
        const res = await fetch('/_global-nav.html');
        if (!res.ok) throw new Error(res.statusText);
        placeholder.innerHTML = await res.text();
        highlightCurrentDemoLink();
        setupMobileMenu();
    } catch (e) {
        console.error('Failed to load nav:', e);
    }
}

document.addEventListener('DOMContentLoaded', loadGlobalNav);
