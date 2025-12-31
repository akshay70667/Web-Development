/* ================= DYNAMIC YEAR ================= */
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

/* ================= SMOOTH SCROLL (FALLBACK) ================= */
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");

        if (targetId.startsWith("#")) {
            e.preventDefault();
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});

/* ================= CONTACT FORM VALIDATION ================= */
const form = document.querySelector(".contact-form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.querySelector('input[type="text"]').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const message = form.querySelector("textarea").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you! Your message has been sent.");
        form.reset();
    });
}

/* ================= EMAIL VALIDATION FUNCTION ================= */
function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}
