// js/testimonial-ui.js

let currentPage = 1;
const cardsPerPage = 6;

function initPagination() {
  // First render the testimonials
  renderTestimonials();

  const pagination = document.querySelector(".pagination");

  function getCards() {
    return document.querySelectorAll(".testimonial-card");
  }

  function showPage(page) {
    const cards = getCards();
    const totalPages = Math.ceil(cards.length / cardsPerPage);
    currentPage = page;

    cards.forEach((card, index) => {
      const start = (page - 1) * cardsPerPage;
      const end = page * cardsPerPage;
      card.style.display =
        index >= start && index < end ? "block" : "none";
    });

    document.querySelectorAll(".wow").forEach(el => {
      el.classList.remove("wow", "fadeInUp");
    });

    renderPagination(totalPages);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderPagination(totalPages) {
    pagination.innerHTML = "";

    // Prev
    pagination.innerHTML += `
      <li class="${currentPage === 1 ? "disabled" : ""}">
        <a href="#" onclick="changePage(${currentPage - 1})">
          <i class="fa-solid fa-arrow-left-long"></i>
        </a>
      </li>
    `;

    // Pages
    for (let i = 1; i <= totalPages; i++) {
      pagination.innerHTML += `
        <li class="${i === currentPage ? "active" : ""}">
          <a href="#" onclick="changePage(${i})">${i}</a>
        </li>
      `;
    }

    // Next
    pagination.innerHTML += `
      <li class="${currentPage === totalPages ? "disabled" : ""}">
        <a href="#" onclick="changePage(${currentPage + 1})">
          <i class="fa-solid fa-arrow-right-long"></i>
        </a>
      </li>
    `;
  }

  window.changePage = function (page) {
    const totalPages = Math.ceil(getCards().length / cardsPerPage);
    if (page < 1 || page > totalPages) return;
    showPage(page);
  };

  showPage(1);
}

/* READ MORE TOGGLE (event delegation – works for dynamic cards) */
document.addEventListener("click", function (e) {
  if (!e.target.classList.contains("toggle-text")) return;

  const card = e.target.closest(".post-item");
  if (!card) return;

  const shortText = card.querySelector(".short-text");
  const fullText = card.querySelector(".full-text");

  if (!shortText || !fullText) return;

  const expanded = fullText.style.display === "block";

  shortText.style.display = expanded ? "block" : "none";
  fullText.style.display = expanded ? "none" : "block";

  e.target.textContent = expanded ? "Read more →" : "Show less";
});
