// main.js

console.log('Script loaded');

function highlightCurrentDemoLink() {
    console.log('highlightCurrentDemoLink running');
    const path = window.location.pathname;
    const links = document.querySelectorAll('.global-nav-links a');
    console.log('Found links:', links);
    links.forEach(a => a.classList.remove('current-demo'));

    let id = 'global-nav-hub';
    if (path.includes('/home-services/'))      id = 'global-nav-home-services';
    else if (path.includes('/real-estate/'))   id = 'global-nav-real-estate';
    else if (path.includes('/fitness-centers/')) id = 'global-nav-fitness';

    const active = document.getElementById(id);
    console.log('Active link element:', active);
    if (active) active.classList.add('current-demo');
}

async function loadGlobalNav() {
    console.log('loadGlobalNav start');
    const placeholder = document.getElementById('global-nav-placeholder');
    console.log('Placeholder:', placeholder);
    if (!placeholder) return console.error('Nav placeholder missing');

    try {
        console.log('Fetching /_global-nav.html');
        const res = await fetch('/_global-nav.html');
        console.log('Fetch response ok?', res.ok);
        if (!res.ok) throw new Error(res.statusText);
        const text = await res.text();
        console.log('Fetched HTML length:', text.length);
        placeholder.innerHTML = text;
        console.log('Injected nav HTML');
        highlightCurrentDemoLink();
    } catch (e) {
        console.error('Failed to load nav:', e);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded');
    loadGlobalNav();
});

document.addEventListener('click', (e) => {
    const ham = e.target.closest('.global-nav-hamburger');
    console.log('Click event, ham:', ham);
    if (!ham) return;

    const nav = document.getElementById('globalNavLinks');
    console.log('Nav links:', nav);
    if (!nav) return console.error('Nav links not found');

    console.log('Toggling menu');
    ham.classList.toggle('active');
    nav.classList.toggle('active');

    const expanded = ham.getAttribute('aria-expanded') === 'true';
    console.log('Previous aria-expanded:', expanded);
    ham.setAttribute('aria-expanded', String(!expanded));
    console.log('New aria-expanded:', !expanded);
});
