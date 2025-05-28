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
    //highlightCurrentDemoLink();
}

