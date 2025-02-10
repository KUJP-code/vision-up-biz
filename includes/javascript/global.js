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
                newUrl = "/en"; // Redirect to English homepage
            } else if (currentLang === "en" && (currentUrl === "/en" || currentUrl === "/en/index")) {
                newUrl = "/"; // Redirect to Japanese homepage
            }
            // Handle all other pages (nested or not)
            else if (currentLang === "ja") {
                newUrl = "/en" + currentUrl; // Add /en/ before the path
            } else if (currentLang === "en") {
                newUrl = currentUrl.replace(/^\/en/, ""); // Remove /en from the beginning of the path
            }

            window.location.href = newUrl; // Redirect to the new URL
        });
    }
});
