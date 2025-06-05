//Navbar CSS Property in Scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Profile selection redirecting
const profileIcon = document.querySelector(".profile-icon");
profileIcon.addEventListener("click", () => {
  window.location.href = "profile.html";
});

// Movie Card 
const movieCards = document.querySelectorAll(".movie-card");
movieCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});
