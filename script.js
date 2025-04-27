// Create and animate bubbles
function createBubbles() {
  const bubblesContainer = document.querySelector(".bubbles");
  if (!bubblesContainer) return; // Prevent errors if .bubbles is missing

  const numberOfBubbles = 100;
  bubblesContainer.innerHTML = ""; // Clear existing bubbles

  for (let i = 0; i < numberOfBubbles; i++) {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    // Random sizing
    const size = Math.random() * 60 + 20;

    // Random horizontal position
    const left = Math.random() * 100;
    // Random starting vertical position (staggered from bottom)
    const bottom = Math.random() * 20;

    // Random timing and opacity
    const duration = Math.random() * 10 + 3.5; // 3.5s to 13.5s
    const opacity = Math.random() * 0.3 + 0.1; // 0.1 to 0.4

    // Apply styles
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${left}%`;
    bubble.style.bottom = `${bottom}%`;
    bubble.style.opacity = opacity;
    bubble.style.animation = `rise ${duration}s linear infinite`;
    bubble.dataset.originalLeft = left; // Store as a number

    bubblesContainer.appendChild(bubble);
  }
}

// Initialize bubbles and refresh periodically
document.addEventListener("DOMContentLoaded", () => {
  createBubbles();
  setInterval(createBubbles, 15000); // Refresh every 15 seconds
});

// Navbar toggle for mobile
const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");
const navbarLinks = document.querySelectorAll(".navbar-menu a");

if (navbarToggle && navbarMenu) {
  navbarToggle.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
  });

  // Close menu when a link is clicked
  navbarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbarMenu.classList.remove("active");
    });
  });
}

// Highlight active section in navbar and handle navbar scroll effect
const sections = document.querySelectorAll("section, .skills-section");
const navLinks = document.querySelectorAll(".navbar-menu a");
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  // Highlight active section
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const navbarHeight = navbar ? navbar.offsetHeight : 80; // Fallback to 80px
    if (window.pageYOffset >= sectionTop - navbarHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });

  // Navbar scroll effect
  if (navbar) {
    navbar.classList.toggle("scrolled", window.scrollY > 0);
  }

  // Show/hide Back to Top button
  const backToTopButton = document.querySelector(".back-to-top");
  if (backToTopButton) {
    backToTopButton.style.display = window.scrollY > 300 ? "block" : "none";
  }
});

// Smooth scroll to top
const backToTopButton = document.querySelector(".back-to-top");
if (backToTopButton) {
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Live clock in footer
function updateClock() {
  const clockElement = document.getElementById("live-clock");
  if (clockElement) {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    clockElement.textContent = `Current Time: ${timeString}`;
  }
}
setInterval(updateClock, 1000);
updateClock();