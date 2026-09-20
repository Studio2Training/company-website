// js/testimonials-api.js

const TESTIMONIAL_API =
  "https://script.google.com/macros/s/AKfycbw9l-FzKgR16KUBWFewq4tarBDMv7IQj9a0z18nhJ-fp8ypGJCQSh6vr1_S6KrG7m4/exec";

async function loadTestimonialsFromAPI() {
  try {
    console.log("Fetching from Google Sheets...");
    const res = await fetch(TESTIMONIAL_API);
    
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    
    const data = await res.json();
    
    if (!Array.isArray(data)) {
      console.warn("Google Sheets returned non-array data:", data);
      return null;
    }
    
    console.log(`Received ${data.length} rows from Google Sheets`);
    
    // Log first row to see structure
    if (data.length > 0) {
      console.log("Columns:", Object.keys(data[0]));
      console.log("Sample row:", JSON.stringify(data[0], null, 2));
    }
    
    // Filter only APPROVED testimonials (case-insensitive)
    const approved = data.filter(t => {
      const status = t.status || t.Status || t.approved || t.Approved || "";
      const isApproved = String(status).toUpperCase().trim() === "APPROVED";
      console.log(`${t.name || 'Unknown'}: status="${status}" -> ${isApproved ? 'INCLUDED' : 'EXCLUDED'}`);
      return isApproved;
    });
    
    console.log(`Filtered to ${approved.length} APPROVED testimonials`);
    
    return approved;
    
  } catch (err) {
    console.error("Failed to load from Google Sheets:", err.message);
    return null;
  }
}

// Single initialization on DOMContentLoaded
document.addEventListener("DOMContentLoaded", async () => {
    console.log("Initializing testimonials...");

    try {
        const apiData = await loadTestimonialsFromAPI();

        if (apiData && apiData.length > 0) {
            console.log("Merging Google Sheets + static data");
            testimonials = [...testimonials, ...apiData];
        } else {
            console.log("Using static fallback data");
        }

        function getTestimonialDate(testimonial) {
            const date =
                testimonial.timestamp ||
                testimonial.Timestamp ||
                testimonial.date ||
                testimonial.Date ||
                testimonial.createdAt ||
                testimonial.created_at ||
                testimonial["Timestamp"];

            if (!date) return 0;

            const parsedDate = new Date(date).getTime();
            return Number.isNaN(parsedDate) ? 0 : parsedDate;
        }

        testimonials.sort((a, b) => {
            return getTestimonialDate(b) - getTestimonialDate(a);
        });

        console.log("Testimonials sorted by newest first");
        console.log(`Total testimonials to display: ${testimonials.length}`);

        // Render testimonials
        renderTestimonials();

        // Initialize pagination
        initPagination();

    } catch (error) {
        console.error("Testimonials initialization failed:", error);
    } finally {
        // ALWAYS remove loader after rendering/failure
        hideTestimonialsLoader();

        console.log("Done!");
    }
});

