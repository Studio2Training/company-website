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


function getField(t, ...keys) {
  for (const key of keys) {
    if (t[key] !== undefined && t[key] !== null && t[key] !== "") {
      return t[key];
    }
  }
  return null;
}

function formatDate(timestamp) {
  if (!timestamp) return null;

  const d = new Date(timestamp);
  if (isNaN(d)) return null;

  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  });
}

function formatTime(timestamp) {
  if (!timestamp) return null;

  const d = new Date(timestamp);
  if (isNaN(d)) return null;

  return d.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  });
}




// Render testimonials to the DOM
function renderTestimonials() {
  const container = document.getElementById("testimonialContainer");
  if (!container) {
    console.error("testimonialContainer element not found!");
    return;
  }

  if (!testimonials || testimonials.length === 0) {
    container.innerHTML = '<p class="empty">No testimonials available.</p>';
    return;
  }

  container.innerHTML = "";

  testimonials.forEach((t, i) => {
    // Flexible field mapping
    const name = getField(t, "name", "Name") || "Anonymous";
    const place = getField(t, "place", "Place");
    const designation = getField(t, "designation", "Designation");
    const mode = getField(t, "mode", "Mode");
    const rating = Number(getField(t, "rating", "Rating")) || 5;

    // Timestamp → Date & Time
    const rawTimestamp = getField(t, "timestamp", "Timestamp");
    const date = formatDate(rawTimestamp);
    const time = formatTime(rawTimestamp);

    const fullText = getField(t, "review", "Review", "full") || "";
    const shortText = makeShort(fullText);

    container.innerHTML += `
      <div class="col-lg-4 col-md-6 testimonial-card">
        <div class="post-item wow fadeInUp" data-wow-delay="${i * 0.1}s">

          <!-- Rating -->
          <div class="post-featured-image">
            <figure class="image-anime">
              <div class="rating">${renderStars(rating)}</div>

              ${shortText ? `<p class="short-text">${shortText}</p>` : ""}
              ${fullText ? `<p class="full-text" style="display:none;">${fullText}</p>` : ""}
            </figure>
          </div>

          <div class="post-item-body">
            <div class="post-item-content">

              <!-- Top row: Name (left) + District (right) -->
              <div class="top-row">
                <h3>${name}</h3>

                <div class="right-info">
                  ${place ? `<div class="place">${place}</div>` : ""}
                  ${(date || time) ? `
                    <div class="testimonial-datetime">
                      ${date ? `<span class="date">${date}</span>` : ""}
                      ${time ? `<span class="time">${time}</span>` : ""}
                    </div>
                  ` : ""}
                </div>
              </div>

              <!-- Left stacked info -->
              ${designation ? `<p class="meta designation"><strong>${designation}</strong></p>` : ""}
              ${mode ? `<p class="meta mode">Mode: ${mode}</p>` : ""}

            </div>
            ${
              fullText.length > shortText.length
                ? `<div class="post-item-btn">
                     <a class="readmore-btn toggle-text">Read more →</a>
                   </div>`
                : ""
            }
          </div>

        </div>
      </div>
    `;
  });
}
