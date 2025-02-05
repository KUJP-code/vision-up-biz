document.addEventListener("DOMContentLoaded", function () {
    const langSwitcher = document.querySelector(".navlink-language");
    const currentLang = document.documentElement.lang; // Get current document language
    let currentUrl = window.location.pathname;

    if (langSwitcher) {
        let newUrl = currentUrl;

        if (currentLang === "ja") {
            // Add /en/ to the URL
            newUrl = currentUrl === "/index.html" ? "/en.html" : "/en" + currentUrl;
        } else if (currentLang === "en") {
            // Remove /en/ from the URL
            newUrl = currentUrl === "/en.html" ? "/index.html" : currentUrl.replace(/^\/en\//, "/");
        }

        langSwitcher.href = newUrl;
    }
});
