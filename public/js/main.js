// Function to handle the mobile menu toggle
function setupMobileMenu() {
    console.log("Attempting to set up mobile menu..."); // Log: Starting setup
    const hamburgerButton = document.querySelector('.global-nav-hamburger');
    const navLinks = document.getElementById('globalNavLinks');

    if (hamburgerButton && navLinks) {
        console.log("SUCCESS: Hamburger and NavLinks FOUND. Adding event listener."); // Log: Found!
        hamburgerButton.addEventListener('click', () => {
            console.log("Hamburger clicked!"); // Log: Click detected
            hamburgerButton.classList.toggle('active');
            const isExpanded = hamburgerButton.getAttribute('aria-expanded') === 'true';
            hamburgerButton.setAttribute('aria-expanded', String(!isExpanded));

            if (navLinks.style.display === 'flex') {
                navLinks.style.display = 'none';
            } else {
                navLinks.style.display = 'flex';
            }
        });
    } else {
        // Log: Not Found! - This is likely what's happening now
        console.error("FAILURE: Hamburger or NavLinks NOT FOUND during setup.");
        if (!hamburgerButton) console.log("   - Hamburger (.global-nav-hamburger) was null.");
        if (!navLinks) console.log("   - NavLinks (#globalNavLinks) was null.");
    }
}

// Function to load and inject the global navigation
async function loadGlobalNav() {
    console.log("loadGlobalNav started."); // Log: Starting load
    const navPlaceholder = document.getElementById('global-nav-placeholder');

    if (!navPlaceholder) {
        console.error("CRITICAL ERROR: Global navigation placeholder (#global-nav-placeholder) not found! Cannot load nav.");
        return;
    }
    console.log("Placeholder found."); // Log: Placeholder OK

    try {
        console.log("Fetching /_global-nav.html..."); // Log: Fetching
        const response = await fetch('/_global-nav.html');
        console.log("Fetch response received. Status:", response.status); // Log: Fetch status

        if (!response.ok) {
            throw new Error(`Failed to fetch global nav: ${response.status} ${response.statusText}`);
        }
        const navHTML = await response.text();
        console.log("Nav HTML received. Injecting into placeholder..."); // Log: Injecting
        navPlaceholder.innerHTML = navHTML;
        console.log("HTML Injected. Now calling highlightCurrentDemoLink and setupMobileMenu..."); // Log: Calling setup

        // Call the functions *after* innerHTML is set
        highlightCurrentDemoLink();
        setupMobileMenu(); // <--- This is the crucial call

        console.log("loadGlobalNav finished successfully."); // Log: Finished

    } catch (error) {
        console.error("Error loading global navigation:", error); // Log: Error
        navPlaceholder.innerHTML = "<p style='color:red; text-align:center;'>Error loading navigation.</p>";
    }
}

// Function to highlight the current demo link (Keep your existing one)
function highlightCurrentDemoLink() {
    console.log("Highlighting current link...");
    const currentPath = window.location.pathname;
    document.querySelectorAll('.global-site-nav ul li a').forEach(link => {
        link.classList.remove('current-demo');
    });
    let linkIdToHighlight = 'global-nav-hub';
    if (currentPath.includes('/home-services/')) linkIdToHighlight = 'global-nav-home-services';
    else if (currentPath.includes('/real-estate/')) linkIdToHighlight = 'global-nav-real-estate';
    else if (currentPath.includes('/fitness-centers/')) linkIdToHighlight = 'global-nav-fitness';
    const activeLink = document.getElementById(linkIdToHighlight);
    if (activeLink) activeLink.classList.add('current-demo');
}

// Call the function to load the navigation when the DOM is ready
console.log("Adding DOMContentLoaded event listener.");
document.addEventListener('DOMContentLoaded', loadGlobalNav);
console.log("Event listener added.");