//document.addEventListener("DOMContentLoaded", function () {
  //  const langSwitcher = document.querySelector(".navlink-language");

    // if (langSwitcher) {
       // langSwitcher.addEventListener("click", function (event) {
          //  event.preventDefault(); // Prevent default link behavior

        //    const currentLang = document.documentElement.lang; // Get current document language
        //    let currentUrl = window.location.pathname; // Get the current path without .html
        //    let newUrl;

            // Handle the homepage case separately
        //    if (currentLang === "ja" && currentUrl === "/index") {
        //        newUrl = "/en"; // Redirect to English homepage (en.html)
        //    } else if (currentLang === "en" && currentUrl === "/en") {
        //        newUrl = "/index.html"; // Redirect to Japanese homepage (index.html)
        //    }
            // Handle all other pages (nested or not)
        //    else if (currentLang === "ja") {
                // Add /en/ before the path (e.g., /en/services for /services)
        //        newUrl = "/en" + currentUrl;
        //    } else if (currentLang === "en") {
                // Remove /en/ from the path (e.g., /services for /en/services)
        //        newUrl = currentUrl.replace(/^\/en\//, "/");
        //    }

            // Redirect to the new URL
        //    window.location.href = newUrl;
    //    });
//    }
//});
