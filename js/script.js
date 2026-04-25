/* ============================================
   Mobile Navigation Toggle
   ============================================ */
function initNavbar() {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    links.classList.toggle("open");
  });

  // Close menu when a link is clicked
  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.classList.remove("active");
      links.classList.remove("open");
    });
  });
}

/* ============================================
   Date Formatter
   ============================================ */
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/* ============================================
   Home Page: Blog Grid, Search & Filters
   ============================================ */
function initHomePage() {
  const grid = document.getElementById("blogGrid");
  const searchInput = document.getElementById("searchInput");
  const filterContainer = document.getElementById("filterButtons");
  const postCount = document.getElementById("postCount");

  if (!grid || !searchInput || !filterContainer) return;

  let activeCategory = "All";

  // Render category filter buttons
  function renderFilters() {
    filterContainer.innerHTML = "";
    categories.forEach((cat) => {
      const btn = document.createElement("button");
      btn.className = "filter-btn" + (cat === activeCategory ? " active" : "");
      btn.textContent = cat;
      btn.addEventListener("click", () => {
        activeCategory = cat;
        renderFilters();
        renderPosts();
      });
      filterContainer.appendChild(btn);
    });
  }

  // Render blog cards
  function renderPosts() {
    const query = searchInput.value.toLowerCase().trim();

    const filtered = blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;
      const matchesSearch = post.title.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });

    // Update count
    postCount.textContent = filtered.length + " post" + (filtered.length !== 1 ? "s" : "");

    if (filtered.length === 0) {
      grid.className = "blog-grid blog-grid--empty";
      grid.innerHTML = `
        <div class="empty-state">
          <div class="empty-state__icon">&#128270;</div>
          <h3 class="empty-state__title">No posts found</h3>
          <p>Try adjusting your search or filter to find what you're looking for.</p>
        </div>
      `;
      return;
    }

    grid.className = "blog-grid";
    grid.innerHTML = "";

    filtered.forEach((post) => {
      const card = document.createElement("article");
      card.className = "blog-card";
      card.innerHTML = `
        <div class="blog-card__image-wrapper">
          <img
            src="${post.image}"
            alt="${post.title}"
            class="blog-card__image"
            loading="lazy"
          >
          <span class="blog-card__category">${post.category}</span>
        </div>
        <div class="blog-card__body">
          <h3 class="blog-card__title">${post.title}</h3>
          <p class="blog-card__description">${post.description}</p>
          <div class="blog-card__meta">
            <span class="blog-card__author">${post.author}</span>
            <span class="blog-card__date">${formatDate(post.date)}</span>
          </div>
        </div>
      `;
      card.addEventListener("click", () => {
        window.location.href = "blog.html?id=" + post.id;
      });
      grid.appendChild(card);
    });
  }

  // Search listener with debounce
  let debounceTimer;
  searchInput.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(renderPosts, 200);
  });

  // Footer category links
  document.querySelectorAll("[data-category]").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      activeCategory = link.getAttribute("data-category");
      renderFilters();
      renderPosts();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  renderFilters();
  renderPosts();
}

/* ============================================
   Blog Detail Page
   ============================================ */
function initBlogDetail() {
  const container = document.getElementById("blogDetail");
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    container.innerHTML = `
      <a href="index.html" class="blog-detail__back">&#8592; Back to Home</a>
      <div class="empty-state" style="text-align:center; padding:60px 0;">
        <div class="empty-state__icon">&#128533;</div>
        <h3 class="empty-state__title">Post Not Found</h3>
        <p>The blog post you're looking for doesn't exist.</p>
      </div>
    `;
    return;
  }

  // Update page title
  document.title = post.title + " - DevBlog";

  container.innerHTML = `
    <a href="index.html" class="blog-detail__back">&#8592; Back to Home</a>
    <span class="blog-detail__category">${post.category}</span>
    <h1 class="blog-detail__title">${post.title}</h1>
    <div class="blog-detail__meta">
      <span class="blog-detail__meta-item">&#9998; ${post.author}</span>
      <span class="blog-detail__meta-item">&#128197; ${formatDate(post.date)}</span>
    </div>
    <img
      src="${post.image}"
      alt="${post.title}"
      class="blog-detail__image"
    >
    <div class="blog-detail__content">${post.content}</div>
  `;
}

/* ============================================
   Contact Form Validation
   ============================================ */
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");
  const successMsg = document.getElementById("formSuccess");

  function showError(input, errorEl) {
    input.classList.add("error");
    errorEl.classList.add("visible");
  }

  function clearError(input, errorEl) {
    input.classList.remove("error");
    errorEl.classList.remove("visible");
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Clear errors on input
  nameInput.addEventListener("input", () => clearError(nameInput, nameError));
  emailInput.addEventListener("input", () => clearError(emailInput, emailError));
  messageInput.addEventListener("input", () => clearError(messageInput, messageError));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    // Name
    if (nameInput.value.trim() === "") {
      showError(nameInput, nameError);
      valid = false;
    } else {
      clearError(nameInput, nameError);
    }

    // Email
    if (!isValidEmail(emailInput.value.trim())) {
      showError(emailInput, emailError);
      valid = false;
    } else {
      clearError(emailInput, emailError);
    }

    // Message
    if (messageInput.value.trim() === "") {
      showError(messageInput, messageError);
      valid = false;
    } else {
      clearError(messageInput, messageError);
    }

    if (valid) {
      form.style.display = "none";
      successMsg.classList.add("visible");
    }
  });
}

/* ============================================
   Initialize on DOM Ready
   ============================================ */
document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initHomePage();
  initBlogDetail();
  initContactForm();
});
