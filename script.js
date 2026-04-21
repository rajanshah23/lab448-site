// Main JavaScript functionality for the website

document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.querySelector(".mobile-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (mobileToggle) {
    mobileToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      navLinks.classList.toggle("active");
      mobileToggle.classList.toggle("active");
    });
  }

  // 2. Sticky Header & Menu Close on Scroll
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Auto-close mobile menu on scroll if active
    if (navLinks && navLinks.classList.contains("active")) {
      navLinks.classList.remove("active");
      mobileToggle.classList.remove("active");
    }
  });

  // 3. Form Submission via Formspree Endpoint
  const form = document.getElementById("repairForm");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;

      // Set Loading state
      btn.textContent = "Sending Inquiry...";
      btn.disabled = true;

      const data = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: data,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          btn.textContent = "Request Sent!";
          btn.style.backgroundColor = "var(--success)";
          btn.style.color = "white";
          form.reset();
        } else {
          btn.textContent = "Error Sending";
          btn.style.backgroundColor = "var(--error)";
          btn.style.color = "white";
        }
      } catch (error) {
        btn.textContent = "Network Error";
        btn.style.backgroundColor = "var(--error)";
        btn.style.color = "white";
      } finally {
        // Reset button after 3 seconds
        setTimeout(() => {
          btn.textContent = originalText;
          btn.disabled = false;
          btn.style = ""; // Reset inline styles
        }, 3000);
      }
    });
  }

  // 4. Add Mobile Nav Buttons Dynamically
  function addMobileNavButtons() {
    // Remove existing mobile action buttons if any
    const existingActions = document.querySelector(".mobile-nav-actions");
    if (existingActions) existingActions.remove();

    // Only add on mobile screens
    if (window.innerWidth <= 900 && navLinks) {
      const actionsDiv = document.createElement("div");
      actionsDiv.className = "mobile-nav-actions";
      actionsDiv.style.display = "flex";
      actionsDiv.style.flexDirection = "column";
      actionsDiv.style.gap = "15px";
      actionsDiv.style.marginTop = "30px";
      actionsDiv.style.paddingTop = "20px";
      actionsDiv.style.borderTop = "1px solid rgba(255,255,255,0.2)";

      // Create Shop Now button
      const shopBtn = document.createElement("a");
      shopBtn.href = "https://store.lab448.com";
      shopBtn.innerHTML = '<i class="fas fa-shopping-cart" style="margin-right: 8px;"></i> Shop Now';
      shopBtn.style.display = "block";
      shopBtn.style.padding = "14px 20px";
      shopBtn.style.background = "linear-gradient(135deg, #009CDE, #33B1E5)";
      shopBtn.style.border = "none";
      shopBtn.style.borderRadius = "8px";
      shopBtn.style.color = "white";
      shopBtn.style.textAlign = "center";
      shopBtn.style.fontWeight = "600";
      shopBtn.style.textDecoration = "none";
      shopBtn.style.transition = "all 0.2s ease";
      shopBtn.style.cursor = "pointer";

      shopBtn.addEventListener("mouseenter", () => {
        shopBtn.style.background = "linear-gradient(135deg, #33B1E5, #009CDE)";
        shopBtn.style.transform = "translateY(-2px)";
      });
      shopBtn.addEventListener("mouseleave", () => {
        shopBtn.style.background = "linear-gradient(135deg, #009CDE, #33B1E5)";
        shopBtn.style.transform = "translateY(0)";
      });
      shopBtn.addEventListener("click", (e) => {
        // Close menu before navigating
        navLinks.classList.remove("active");
        if (mobileToggle) mobileToggle.classList.remove("active");
      });

      // Create Book Repair button
      const bookBtn = document.createElement("a");
      bookBtn.href = "#book";
      bookBtn.innerHTML = '<i class="fas fa-calendar-alt" style="margin-right: 8px;"></i> Book Repair';
      bookBtn.style.display = "block";
      bookBtn.style.padding = "14px 20px";
      bookBtn.style.background = "linear-gradient(135deg, #009CDE, #33B1E5)";
      bookBtn.style.border = "none";
      bookBtn.style.borderRadius = "8px";
      bookBtn.style.color = "white";
      bookBtn.style.textAlign = "center";
      bookBtn.style.fontWeight = "600";
      bookBtn.style.textDecoration = "none";
      bookBtn.style.transition = "all 0.2s ease";
      bookBtn.style.cursor = "pointer";

      bookBtn.addEventListener("mouseenter", () => {
        bookBtn.style.background = "linear-gradient(135deg, #33B1E5, #009CDE)";
        bookBtn.style.transform = "translateY(-2px)";
      });
      bookBtn.addEventListener("mouseleave", () => {
        bookBtn.style.background = "linear-gradient(135deg, #009CDE, #33B1E5)";
        bookBtn.style.transform = "translateY(0)";
      });
      bookBtn.addEventListener("click", (e) => {
        navLinks.classList.remove("active");
        if (mobileToggle) mobileToggle.classList.remove("active");
      });

      actionsDiv.appendChild(shopBtn);
      actionsDiv.appendChild(bookBtn);
      navLinks.appendChild(actionsDiv);
    }
  }

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      window.innerWidth <= 900 &&
      navLinks &&
      navLinks.classList.contains("active")
    ) {
      if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
        navLinks.classList.remove("active");
        if (mobileToggle) mobileToggle.classList.remove("active");
      }
    }
  });

  // Call on load and on resize
  addMobileNavButtons();
  window.addEventListener("resize", () => {
    addMobileNavButtons();
  });
});
