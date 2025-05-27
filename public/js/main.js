// Function to load and inject the global navigation
async function loadGlobalNav() {
    const navPlaceholder = document.getElementById('global-nav-placeholder');
    if (!navPlaceholder) {
        console.error("Global navigation placeholder not found!");
        return;
    }

    try {
        // Adjust the path to _global-nav.html based on where main.js is relative to it.
        // If main.js is in /js/ and _global-nav.html is in root, path is '../_global-nav.html'
        // If both are in root, path is '_global-nav.html'
        const response = await fetch('/_global-nav.html'); // Assuming _global-nav.html is at the root

        if (!response.ok) {
            throw new Error(`Failed to fetch global nav: ${response.status} ${response.statusText}`);
        }
        const navHTML = await response.text();
        navPlaceholder.innerHTML = navHTML;
        highlightCurrentDemoLink(); // Call function to highlight the active link
    } catch (error) {
        console.error("Error loading global navigation:", error);
        navPlaceholder.innerHTML = "<p style='color:red; text-align:center;'>Error loading navigation.</p>";
    }
}

// Function to highlight the current demo link in the global navigation
function highlightCurrentDemoLink() {
    const currentPath = window.location.pathname; // Gets the path of the current page

    // Remove .current-demo from all links first
    document.querySelectorAll('.global-site-nav ul li a').forEach(link => {
        link.classList.remove('current-demo');
    });

    // Add .current-demo to the appropriate link
    if (currentPath === '/' || currentPath.endsWith('/index.html') && !currentPath.includes('/home-services/') && !currentPath.includes('/real-estate/') && !currentPath.includes('/fitness-centers/')) {
        document.getElementById('global-nav-hub')?.classList.add('current-demo');
    } else if (currentPath.includes('/home-services/')) {
        document.getElementById('global-nav-home-services')?.classList.add('current-demo');
    } else if (currentPath.includes('/real-estate/')) {
        document.getElementById('global-nav-real-estate')?.classList.add('current-demo');
    } else if (currentPath.includes('/fitness-centers/')) {
        document.getElementById('global-nav-fitness')?.classList.add('current-demo');
    }
}

// Call the function to load the navigation when the DOM is ready
document.addEventListener('DOMContentLoaded', loadGlobalNav);