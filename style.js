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