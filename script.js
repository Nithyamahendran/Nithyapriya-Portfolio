const roles = [
    "Full Stack Developer",
    "Java Developer",
    "Spring Boot Developer"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
    const typingElement = document.getElementById("typing");
    currentText = roles[index];

    if (!isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex++);
        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
            return;
        }
    } else {
        typingElement.textContent = currentText.substring(0, charIndex--);
        if (charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % roles.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
const faders = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
    faders.forEach(fade => {
        const rect = fade.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            fade.classList.add("show");
        }
    });
});
