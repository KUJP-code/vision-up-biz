// Wait for the entire HTML document to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    
    // Select the language switcher button/link using its class
    const langSwitcher = document.querySelector(".navlink-language");

    // Ensure the element exists before proceeding
    if (langSwitcher) {
        
        // Add an event listener to detect when the user clicks or taps on the language switcher
        langSwitcher.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default behavior of the <a> tag (prevent navigation)
            
            // Get the current language from the <html> tag
            const currentLang = document.documentElement.lang;

            // Get the current page path (everything after the domain name)
            let currentUrl = window.location.pathname;

            // Declare a variable for the new URL we will redirect to
            let newUrl;

            // If the current language is Japanese (ja), switch to the English version
            if (currentLang === "ja") {
                // If the user is on the homepage ("/"), redirect to "/en/"
                // Otherwise, add "/en/" before the current path
                newUrl = currentUrl === "/" ? "/en/" : "/en" + currentUrl;
            } 
            // If the current language is English (en), switch to the Japanese version
            else if (currentLang === "en") {
                // Remove "/en/" from the beginning of the path using regex
                newUrl = currentUrl.replace(/^\/en\//, "/") || "/";
            }

            // Redirect the user to the new URL
            window.location.href = newUrl;
        });
    }
});
