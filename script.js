
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});


function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();


document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();
    document.querySelector(".form-msg").textContent = "Message Sent Successfully!";
    document.querySelector(".form-msg").style.color = "green";
});