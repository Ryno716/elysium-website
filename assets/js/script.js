document.addEventListener("DOMContentLoaded", function () {
  const navbarContainer = document.getElementById("navbar-container");

  // ✅ Load Navbar Dynamically First
  fetch("components/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      navbarContainer.innerHTML = data;

      const navbar = document.querySelector("nav");
      const links = document.querySelectorAll("nav ul li a");

      // ✅ Improved Active Class Fix
      links.forEach((link) => {
        const linkPath = new URL(link.href).pathname; // Extracts only the path (e.g., "/about.html")
        const currentPath = window.location.pathname; // Current page path

        if (linkPath === currentPath) {
          link.classList.add("active");
        }
      });

      // ✅ Sticky Navbar Effect
      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    })
    .catch((error) => console.error("Error loading navbar:", error));

  // ✅ Load Hero Section
  fetch("components/hero.html")
    .then((response) => response.text())
    .then(
      (data) => (document.getElementById("hero-container").innerHTML = data)
    )
    .catch((error) => console.error("Error loading hero section:", error));
});
