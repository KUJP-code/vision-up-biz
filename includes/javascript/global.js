document.addEventListener("DOMContentLoaded", function () {
    const langSwitcher = document.querySelector(".navlink-language");

    if (langSwitcher) {
        langSwitcher.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior

            const currentLang = document.documentElement.lang; // Get current document language
            let currentUrl = window.location.pathname.replace(/\/$/, ""); // Remove trailing slash if any
            let newUrl;

            // Handle homepage separately
            if (currentLang === "ja" && (currentUrl === "/" || currentUrl === "/index")) {
                newUrl = "/en.html"; // Redirect to English homepage
            } else if (currentLang === "en" && (currentUrl === "/en" || currentUrl === "/en/index")) {
                newUrl = "/index"; // Redirect to Japanese homepage (index.html or /)
            }
            // Handle English homepage (en.html) redirection
            else if (currentLang === "en" && currentUrl === "/en.html") {
                newUrl = "/index"; // Redirect to Japanese homepage
            }
            // Handle all other pages (nested or not)
            else if (currentLang === "ja") {
                // Add /en/ before the path (without .html extension)
                newUrl = "/en" + currentUrl.replace(/^\/index$/, ""); 
            } else if (currentLang === "en") {
                // Remove /en/ from the beginning of the path (without .html extension)
                newUrl = currentUrl.replace(/^\/en/, ""); 
            }

            window.location.href = newUrl; // Redirect to the new URL
        });
    }
});
