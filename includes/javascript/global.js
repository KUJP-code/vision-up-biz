document.addEventListener("DOMContentLoaded", function () {
    const langSwitcher = document.querySelector(".navlink-language");
    if (!langSwitcher) return;

    langSwitcher.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default behavior

        const currentLang = document.documentElement.lang;
        let currentUrl = window.location.pathname;
        let newUrl = currentUrl;

        if (currentLang === "ja") {
            newUrl = currentUrl === "/index.html" ? "/en.html" : "/en" + currentUrl;
        } else if (currentLang === "en") {
            newUrl = currentUrl === "/en.html" ? "/index.html" : currentUrl.replace(/^\/en\//, "/");
        }

        window.location.href = newUrl; // Perform the redirect
    });
});
