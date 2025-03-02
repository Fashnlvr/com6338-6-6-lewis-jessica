document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.querySelector(".hamburger-btn");
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const focusableElements = Array.from(hamburgerMenu.querySelectorAll("a, button, input"));

    const toggleMenu = () => {
        const isOpen = hamburgerMenu.classList.toggle("show-menu");
        hamburgerBtn.setAttribute("aria-expanded", isOpen);

        if (isOpen) {
            focusableElements[0]?.focus(); 
        } else {
            hamburgerBtn.focus(); 
        }
    };

    const closeMenu = () => {
        if (hamburgerMenu.classList.contains("show-menu")) {
            hamburgerMenu.classList.remove("show-menu");
            hamburgerBtn.setAttribute("aria-expanded", "false");
        }
    };

    hamburgerBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleMenu();
    });

    hamburgerMenu.addEventListener("click", (event) => {
        event.stopPropagation();
    });

    document.addEventListener("click", (event) => {
        if (!hamburgerMenu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
            closeMenu();
            hamburgerBtn.focus(); 
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && hamburgerMenu.classList.contains("show-menu")) {
            const activeElement = document.activeElement;
            const isMenuItemFocused = focusableElements.includes(activeElement);

            closeMenu();

            if (isMenuItemFocused || activeElement === hamburgerMenu) {
                hamburgerBtn.focus(); 
            }
        }
    });
});
