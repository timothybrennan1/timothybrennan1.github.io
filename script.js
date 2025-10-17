// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// Mobile menu toggle
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");
// Select all links in the mobile menu
const navLinkItems = document.querySelectorAll(".nav-links li a");

navLinkItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active"); // close menu
  });
});

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

