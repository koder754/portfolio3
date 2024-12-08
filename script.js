// Show scroll-to-top button on scroll
window.addEventListener("scroll", () => {
    const scrollTopBtn = document.getElementById("scrollTop");
    if (window.scrollY > 200) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Dynamic greeting based on time
const greeting = document.getElementById("greeting");
const hours = new Date().getHours();

if (hours < 12) {
    greeting.textContent = "Good Morning! Welcome to My Portfolio!";
} else if (hours < 18) {
    greeting.textContent = "Good Afternoon! Welcome to My Portfolio!";
} else {
    greeting.textContent = "Good Evening! Welcome to My Portfolio!";
}

// Fade-in sections on scroll
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
});

// Form validation
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    if (!name || !email) {
        alert("Please fill out both your name and email!");
        return false;
    }
    return true;
}
