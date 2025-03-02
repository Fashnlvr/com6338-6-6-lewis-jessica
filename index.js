document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.querySelector(".hamburger-btn");
    const hamburgerMenu = document.querySelector(".hamburger-menu");

    const toggleMenu = () => {
        const isOpen = hamburgerMenu.classList.toggle("show-menu");
        hamburgerBtn.setAttribute("aria-expanded", isOpen);

        if (!isOpen) {
            hamburgerBtn.focus();
        }
    };

    const closeMenu = () => {
        if (hamburgerMenu.classList.contains("show-menu")) {
            hamburgerMenu.classList.remove("show-menu");
            hamburgerBtn.setAttribute("aria-expanded", "false");
            hamburgerBtn.focus();
        }
    };

    hamburgerBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleMenu();
    });

    document.addEventListener("click", (event) => {
        if (!hamburgerMenu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
            closeMenu();
        }
    });

    hamburgerMenu.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    document.onkeyup = function(e) {
        if (e.key === "Escape") {
            closeMenu();
        }
    };
});
