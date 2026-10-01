const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

const filterButtons = document.querySelectorAll(".filter-btn");
const storyCards = document.querySelectorAll(".story-card");
const noResults = document.getElementById("noResults");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    let visibleCount = 0;

    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    storyCards.forEach((card) => {
      const show = filter === "all" || card.dataset.category === filter;
      card.hidden = !show;
      if (show) visibleCount += 1;
    });
    noResults.hidden = visibleCount > 0;
  });
});

document.getElementById("subscribeForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const emailInput = document.getElementById("emailInput");
  const message = document.getElementById("formMessage");
  if (emailInput.checkValidity()) {
    message.textContent = "Terima kasih! Ini hanya demo, email tidak dikirim atau disimpan.";
    emailInput.value = "";
  }
});
