document.addEventListener("DOMContentLoaded", function () {
    const toggles = document.querySelectorAll(".wplToggle");

    toggles.forEach(toggle => {
        const container = toggle.parentElement;
        const children = Array.from(container.children).filter(child => child !== toggle);

        // Hide all content by default
        children.forEach(child => {
            child.style.display = "none";
        });

        // Add click event
        toggle.addEventListener("click", () => {
            children.forEach(child => {
                child.style.display = child.style.display === "none" ? "block" : "none";
            });
        });
    });
});