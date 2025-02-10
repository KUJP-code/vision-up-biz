document.addEventListener("DOMContentLoaded", function () {
    const langSwitcher = document.querySelector(".navlink-language");

    if (langSwitcher) {
        langSwitcher.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior

            const currentLang = document.documentElement.lang; // Get current document language
            let currentUrl = window.location.pathname; // Get the current path
            let newUrl;

            // Handle homepage case separately
            if (currentLang === "ja" && currentUrl === "/index.html") {
                newUrl = "/en.html"; // Redirect to English homepage
            } else if (currentLang === "en" && currentUrl === "/en.html") {
                newUrl = "/index.html"; // Redirect to Japanese homepage
            } 
            // Handle all other pages (nested or not)
            else if (currentLang === "ja") {
                // Add /en/ ONLY if it's not already there
                newUrl = currentUrl.startsWith("/en/") ? currentUrl : "/en" + currentUrl;
            } else if (currentLang === "en") {
                // Remove /en/ properly without duplicating anything
                newUrl = currentUrl.replace(/^\/en/, "");
            }

            window.location.href = newUrl; // Redirect to the new URL
        });
    }
});
