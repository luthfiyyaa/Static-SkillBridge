// Function to get the correct path to components directory
function getBasePath() {
    // Get the current script's path
    const scripts = document.getElementsByTagName('script');
    const currentScript = scripts[scripts.length - 1];
    const scriptPath = currentScript.src;
    
    // Extract the directory path
    const basePath = scriptPath.substring(0, scriptPath.lastIndexOf('/') + 1);
    return basePath;
}

// Function to load the navbar
function loadNavbar() {
    const basePath = getBasePath();
    fetch(basePath + 'navbar.html')
        .then(res => res.text())
        .then(data => {
            const navbarPlaceholder = document.getElementById('navbar-placeholder');
            if (navbarPlaceholder) {
                navbarPlaceholder.innerHTML = data;
            } else {
                console.error('Navbar placeholder not found!');
            }
        })
        .catch(error => {
            console.error('Error loading navbar:', error);
        });
}

// Load navbar when the script is loaded
document.addEventListener('DOMContentLoaded', loadNavbar); 