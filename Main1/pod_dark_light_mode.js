document.addEventListener("DOMContentLoaded", function () {
    // Get the checkbox element
    var darkModeToggle = document.getElementById("check_pod");

    // Check the initial state of the checkbox (e.g., to persist the mode across page loads)
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-theme");
        darkModeToggle.checked = true;
    }

    // Toggle dark mode on checkbox change
    darkModeToggle.addEventListener("change", function () {
        if (darkModeToggle.checked) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });

    // Function to enable dark mode
    function enableDarkMode() {
        document.body.classList.add("dark-theme");
        localStorage.setItem("darkMode", "enabled");
    }

    // Function to disable dark mode
    function disableDarkMode() {
        document.body.classList.remove("dark-theme");
        localStorage.removeItem("darkMode");
    }
});