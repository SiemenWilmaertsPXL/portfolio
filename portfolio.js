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
document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("themeToggle");
    const body = document.body;

    // Check localStorage for saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.className = savedTheme;
        updateButtonText(savedTheme);
    }

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark");
        body.classList.toggle("light");

        const currentTheme = body.classList.contains("dark") ? "dark" : "light";
        localStorage.setItem("theme", currentTheme);
        updateButtonText(currentTheme);
    });

    function updateButtonText(theme) {
        toggleButton.textContent = theme === "dark" ? "☀️ Lichte modus" : "🌙 Donkere modus";
    }
});
document.addEventListener("DOMContentLoaded", () => {
    // Theme toggle logic (if not already there)
    const toggleButton = document.getElementById("themeToggle");
    const body = document.body;

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.className = savedTheme;
        updateButtonText(savedTheme);
    }

    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark");
        body.classList.toggle("light");
        const currentTheme = body.classList.contains("dark") ? "dark" : "light";
        localStorage.setItem("theme", currentTheme);
        updateButtonText(currentTheme);
    });

    function updateButtonText(theme) {
        toggleButton.textContent = theme === "dark" ? "☀️ Lichte modus" : "🌙 Donkere modus";
    }

    // === Section Reveal Logic ===
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("revealed");
                    observer.unobserve(entry.target); // reveal only once
                }
            });
        },
        {
            threshold: 0.1
        }
    );

    document.querySelectorAll("section").forEach(section => {
        observer.observe(section);
    });
});