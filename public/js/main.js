


// Function to load and inject the global navigation
async function loadGlobalNav() {
    const navPlaceholder = document.getElementById('global-nav-placeholder');
    if (!navPlaceholder) {
        console.error("Global navigation placeholder not found!");
        return;
    }

    try {
        // Ensure this path is correct. If _global-nav.html is in the root, /_global-nav.html is correct.
        // If it's relative, you might need '../_global-nav.html'.
        const response = await fetch('/_global-nav.html'); 

        if (!response.ok) {
            throw new Error(`Failed to fetch global nav: ${response.status} ${response.statusText}`);
        }
        const navHTML = await response.text();
        navPlaceholder.innerHTML = navHTML;

        // --- Call functions AFTER HTML is loaded ---
        //highlightCurrentDemoLink(); 
        //setupMobileMenu();

    } catch (error) {
        console.error("Error loading global navigation:", error);
        navPlaceholder.innerHTML = "<p style='color:red; text-align:center;'>Error loading navigation.</p>";
    }
}

// Function to highlight the current demo link in the global navigation
function highlightCurrentDemoLink() {
    const currentPath = window.location.pathname; 
    const navLinksList = document.querySelectorAll('.global-site-nav ul li a');

    if (!navLinksList.length) {
        console.warn("Global nav links not found for highlighting.");
        return; // Exit if no links are found yet
    }

    navLinksList.forEach(link => {
        link.classList.remove('current-demo');
    });

    // Determine which link to highlight
    let linkIdToHighlight = 'global-nav-hub'; // Default to hub

    if (currentPath.includes('/home-services/')) {
        linkIdToHighlight = 'global-nav-home-services';
    } else if (currentPath.includes('/real-estate/')) {
        linkIdToHighlight = 'global-nav-real-estate';
    } else if (currentPath.includes('/fitness-centers/')) {
        linkIdToHighlight = 'global-nav-fitness';
    } else if (currentPath !== '/' && !currentPath.endsWith('/index.html')) {
        // If it's not a known section and not the root, don't highlight hub
        // unless it's the root path.
    }
    
    // Add the class to the identified link
    const activeLink = document.getElementById(linkIdToHighlight);
    if (activeLink) {
        activeLink.classList.add('current-demo');
    }
}

// Call the function to load the navigation when the DOM is ready
document.addEventListener('DOMContentLoaded', loadGlobalNav);