// js/testimonial-render.js

function renderStars(count = 0) {
  return Array.from({ length: 5 }, (_, i) =>
    `<i class="fa-${i < count ? "solid" : "regular"} fa-star"></i>`
  ).join("");
}

function makeShort(text = "", len = 120) {
  if (!text) return "";
  return text.length > len ? text.slice(0, len) + "..." : text;
}

// Render testimonials to the DOM
function renderTestimonials() {
  const container = document.getElementById("testimonialContainer");
  if (!container) {
    console.error("testimonialContainer element not found!");
    return;
  }
  
  console.log(`Rendering ${testimonials.length} testimonials...`);
  
  if (!testimonials || testimonials.length === 0) {
    container.innerHTML = '<p class="empty">No testimonials available.</p>';
    return;
  }
  
  container.innerHTML = "";

  testimonials.forEach((t, i) => {
    // Handle different field names from Google Sheets
    const fullText = t.full || t.review || t.Review || "";
    const shortText = t.short || t.Short || makeShort(fullText);
    const name = t.name || t.Name || "Anonymous";
    const rating = t.rating || t.rating || t.Rating || 5;

    container.innerHTML += `
      <div class="col-lg-4 col-md-6 testimonial-card">
        <div class="post-item wow fadeInUp" data-wow-delay="${i * 0.1}s">
          <div class="post-featured-image">
            <figure class="image-anime">
              <div>${renderStars(rating)}</div>

              ${shortText ? `<p class="short-text">${shortText}</p>` : ""}
              ${fullText ? `<p class="full-text" style="display:none;">${fullText}</p>` : ""}
            </figure>
          </div>

          <div class="post-item-body">
            <div class="post-item-content">
              <h3>${name}</h3>
            </div>

            ${
              fullText && fullText !== shortText
                ? `<div class="post-item-btn">
                     <a class="readmore-btn toggle-text">Read more</a>
                   </div>`
                : ""
            }
          </div>
        </div>
      </div>
    `;
  });
  
  console.log(`Rendered ${testimonials.length} testimonial cards`);
}

