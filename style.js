document.addEventListener("DOMContentLoaded", function() {
    // Function to toggle the display of details
    function toggleDetails(buttonId, detailsId) {
        const button = document.getElementById(buttonId);
        const details = document.getElementById(detailsId);

        button.addEventListener("click", function() {
            if (details.style.display === "none" || details.style.display === "") {
                details.style.display = "block";
                button.textContent = "Hide Details";
            } else {
                details.style.display = "none";
                button.textContent = "Show Details";
            }
        });
    }

    // Toggle Dribbling Practice details
    toggleDetails("dribblingPracticeToggle", "dribblingPracticeDetails");

    // Toggle Dribbling with Non-Dominant Foot details
    toggleDetails("nonDominantDribblingToggle", "nonDominantDribblingDetails");

    // Toggle Dribbling Challenges details
    toggleDetails("dribblingChallengesToggle", "dribblingChallengesDetails");

    toggleDetails("legSwingToogle", "legSwingDetails");

    toggleDetails("hipCirclesToogle", "hipCirclesDetails");
});

//Language
document.addEventListener("DOMContentLoaded", function() {
    // Define the current language (initially set to English)
    let currentLang = "my";

    // Function to toggle the language
    function toggleLanguage() {
        // Toggle the language between English and Burmese
        currentLang = currentLang === "my" ? "en" : "my";

        // Find all elements with data-lang attribute and update their content
        const elements = document.querySelectorAll("[data-lang]");
        elements.forEach(function(element) {
            const lang = element.getAttribute("data-lang");
            if (lang === currentLang) {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }
        });
    }

    // Attach a click event to a language switch button (customize the button according to your design)
    const switchLangButton = document.getElementById("switchLangButton");

    if (switchLangButton) {
        switchLangButton.addEventListener("click", toggleLanguage);
    }
});