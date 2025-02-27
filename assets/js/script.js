document.addEventListener("DOMContentLoaded", function () {
  fetch("components/hero.html")
    .then((response) => response.text())
    .then(
      (data) => (document.getElementById("hero-container").innerHTML = data)
    )
    .catch((error) => console.error("Error loading hero section:", error));
});
