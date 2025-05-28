// main.js

// Toggle mobile menu
function setupMobileMenu() {
    const hamburgerButton = document.querySelector('.global-nav-hamburger');
    const navLinks = document.getElementById('globalNavLinks'); // This is your <ul class="global-nav-links">

    if (hamburgerButton && navLinks) {
        // Ensure the menu is hidden by default via inline style if not already by CSS,
        // to match the logic of toggling. Your CSS already handles this, but this is a safeguard.
        // However, relying on your stylesheet's "display: none" is cleaner.
        // navLinks.style.display = 'none'; // Optional: set initial inline style if needed

        hamburgerButton.addEventListener('click', () => {
            // 1. Toggle 'active' class on the hamburger button for its own animation (X <-> bars)
            hamburgerButton.classList.toggle('active');
            
            // 2. Toggle ARIA attribute for accessibility
            const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
            hamburgerButton.setAttribute('aria-expanded', String(!isExpanded));

            // 3. Directly toggle the display style for the navigation links (the UL)
            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                // If it's 'none' (from your CSS or previous toggle) or empty (initially), set to 'flex'
                navLinks.style.display = 'flex';
            }
        });
    } else {
        if (!hamburgerButton) {
            console.error("Hamburger button (.global-nav-hamburger) not found.");
        }
        if (!navLinks) {
            console.error("Navigation links list (#globalNavLinks) not found.");
        }
    }
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
