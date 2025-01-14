// Select elements
const menuIcon = document.getElementById("menu-icon");
const navList = document.getElementById("nav-list");
const menuToggleIcon = document.getElementById("menu-toggle-icon");

// Toggle Mobile Menu
menuIcon.addEventListener("click", () => {
  // Toggle 'active' class for navList
  navList.classList.toggle("active");

  // Add rotate animation to menu icon
  menuIcon.classList.toggle("animate");

  // Animate Icon: Switch Between Menu and Cross
  if (navList.classList.contains("active")) {
    menuToggleIcon.classList.replace("bx-menu", "bx-x");
  } else {
    menuToggleIcon.classList.replace("bx-x", "bx-menu");
  }
});









//did you know section////////////
document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector(".did-you-know-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          section.classList.add("in-view");
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(section);
});



//quote section////////////////////

let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.nav-dot');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Auto-slide every 5 seconds
let slideInterval = setInterval(nextSlide, 10000);

// Dots interaction
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        clearInterval(slideInterval); // Stop auto-slide when manually navigating
        currentSlide = parseInt(dot.getAttribute('data-index'));
        showSlide(currentSlide);
        slideInterval = setInterval(nextSlide, 10000); // Restart auto-slide
    });
});

// Left and right arrow interaction
leftArrow.addEventListener('click', () => {
    clearInterval(slideInterval); // Stop auto-slide when manually navigating
    prevSlide();
    slideInterval = setInterval(nextSlide, 10000); // Restart auto-slide
});

rightArrow.addEventListener('click', () => {
    clearInterval(slideInterval); // Stop auto-slide when manually navigating
    nextSlide();
    slideInterval = setInterval(nextSlide, 10000); // Restart auto-slide
});

// Initialize the first slide
showSlide(currentSlide);

//investors faq///////////
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement;

    // Toggle active class on the clicked item
    faqItem.classList.toggle('active');

    // Close other items when one is opened
    document.querySelectorAll('.faq-item').forEach(item => {
      if (item !== faqItem) {
        item.classList.remove('active');
      }
    });
  });
});
