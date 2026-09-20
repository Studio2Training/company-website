function renderHomeTestimonials() {
    const container = document.getElementById("homeTestimonialContainer");

    if (!container || !Array.isArray(testimonials)) return;

    container.innerHTML = "";

    // Show the 3 newest testimonials
    testimonials.slice(0, 6).forEach((t) => {
        const name = t.name || t.Name || "Anonymous";
        const review = t.review || t.Review || t.full || "";
        const rating = Math.max(
            0,
            Math.min(5, Number(t.rating || t.Rating) || 5)
        );

        const card = document.createElement("div");
        card.className = "testimonial-item";

        card.innerHTML = `
            <div class="testimonial-item-content">
                <div class="testimonial-rating">
                    ${Array.from({ length: 5 }, (_, i) =>
                        `<i class="fa-${i < rating ? "solid" : "regular"} fa-star"></i>`
                    ).join("")}
                </div>

                <div class="testimonial-info">
                    <p class="home-review-text"></p>
                    <a href="testimonials.html" class="read-more-link">
                        Read more <span aria-hidden="true">→</span>
                    </a>
                </div>
            </div>

            <div class="testimonial-author-box">
                <div class="testimonial-author-content">
                    <h3 class="home-review-author"></h3>
                </div>
            </div>
        `;

        // Add testimonial text safely
        card.querySelector(".home-review-text").textContent = review;
        card.querySelector(".home-review-author").textContent = name;

        container.appendChild(card);
    });
}