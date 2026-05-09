// =========================
// SECTION REVEAL ANIMATION
// =========================

const sections = document.querySelectorAll(".section");

const revealSections = () => {

    const triggerPoint = window.innerHeight * 0.85;

    sections.forEach((section) => {

        const sectionTop =
            section.getBoundingClientRect().top;

        if (sectionTop < triggerPoint) {
            section.classList.add("show");
        }

    });

};

window.addEventListener(
    "scroll",
    revealSections
);

revealSections();


// =========================
// PROJECT CARD HOVER EFFECT
// =========================

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.classList.add("card-hover");

    });

    card.addEventListener("mouseleave", () => {

        card.classList.remove("card-hover");

    });

});


// =========================
// NAVBAR SHADOW ON SCROLL
// =========================

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        navbar.classList.add("navbar-scrolled");

    } else {

        navbar.classList.remove("navbar-scrolled");

    }

});


// =========================
// CONSOLE MESSAGE
// =========================

console.log(
    "Portfolio Loaded Successfully"
);