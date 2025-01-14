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



document.addEventListener("DOMContentLoaded", () => {
  const features = document.querySelectorAll(".feature-box");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = entry.target.getAttribute("data-index");
          setTimeout(() => {
            entry.target.classList.add("appear");
          }, index * 300); // Delay appearance based on the index
        }
      });
    },
    { threshold: 0.2 }
  );

  features.forEach((feature) => {
    observer.observe(feature);
  });
});


//what we offer section///////

document.addEventListener("DOMContentLoaded", () => {
  const offerSection = document.querySelector(".offer-container");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          offerSection.classList.add("appear");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(offerSection);
});


document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".funding-content");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          content.classList.add("appear");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(content);
});


//approval; section///////////
document.addEventListener("DOMContentLoaded", () => {
  const approvalSection = document.querySelector(".approval-section");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          approvalSection.classList.add("appear");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(approvalSection);
});







//qoute section///////////////
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



//broker faq//////////////
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
