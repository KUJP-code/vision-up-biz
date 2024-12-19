

  
 // Initialize Swiper for testimony carousel lel
const testimonySwiper = new Swiper("#testimony-carousel", {
  slidesPerView: 1.75,
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".testimony-swiper-button-right",
    prevEl: ".testimony-swiper-button-left",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    576: {
      slidesPerView: 1.25,
    },
    768: {
      slidesPerView: 1.5,
    },

    1200: {
      slidesPerView: 1.75,
    },
  },
  on: {
    init: function () {
      // Ensure active classes are managed dynamically after initialization
      this.emit('slideChangeTransitionEnd');
    },
    slideChangeTransitionStart: function () {
      // Clear all active classes before the slide changes
      this.slides.forEach(slide => {
        clearActiveClasses(slide);
      });
    },
    slideChangeTransitionEnd: function () {
      // Apply active classes to the new active slide
      applyActiveClasses(this.slides[this.activeIndex]);
    },
    activeIndexChange: function () {
      // Handle changes to the active index (e.g., during dragging)
      this.slides.forEach(slide => {
        clearActiveClasses(slide);
      });
      applyActiveClasses(this.slides[this.activeIndex]);
    },
  },
});

// Utility function to apply active classes
function applyActiveClasses(slide) {
  if (!slide) return;
  const speechBubble = slide.querySelector('.speech-bubble');
  const text = slide.querySelector('.testimony-text');
  const name = slide.querySelector('.testimony-name');
  const title = slide.querySelector('.testimony-title');

  if (speechBubble) speechBubble.classList.add('active');
  if (text) text.classList.add('active');
  if (name) name.classList.add('active');
  if (title) title.classList.add('active');
}

// Utility function to clear active classes
function clearActiveClasses(slide) {
  if (!slide) return;
  const speechBubble = slide.querySelector('.speech-bubble');
  const text = slide.querySelector('.testimony-text');
  const name = slide.querySelector('.testimony-name');
  const title = slide.querySelector('.testimony-title');

  if (speechBubble) speechBubble.classList.remove('active');
  if (text) text.classList.remove('active');
  if (name) name.classList.remove('active');
  if (title) title.classList.remove('active');
}


// Function to set equal height for all slides
function setEqualHeight(slidesSelector) {
  const slides = document.querySelectorAll(slidesSelector);
  let maxHeight = 0;

  // Reset heights to auto before recalculating
  slides.forEach(slide => {
    slide.style.height = "auto"; // Allow natural height
    const slideHeight = slide.offsetHeight; // Get the natural height
    if (slideHeight > maxHeight) {
      maxHeight = slideHeight; // Track the tallest height
    }
  });

  // Apply the tallest height to all slides
  slides.forEach(slide => {
    slide.style.height = `${maxHeight}px`;
  });
}

// Initialize Swiper with dynamic centeredSlides
function initializeSwiper() {
  const swiper = new Swiper("#service-carousel", {
    slidesPerView: 1.1,
    spaceBetween: 10,
    loop: true,
    lazy: true,
    navigation: {
      nextEl: ".testimony-swiper-button-right",
      prevEl: ".testimony-swiper-button-left",
    },
    on: {
      init: () => {
        // Set slide heights and update Swiper layout on initialization
        setTimeout(() => {
          setEqualHeight(".swiper-slide .service-card-1, .swiper-slide .service-card-2");
          swiper.update(); // Recalculate Swiper layout
          // Enable centeredSlides dynamically after heights are set
          swiper.params.centeredSlides = true;
          swiper.update(); // Apply the new configuration
        }, 100);
      },
    },
  });

  // Recalculate heights and update Swiper on window resize
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      setEqualHeight(".swiper-slide .service-card-1, .swiper-slide .service-card-2");
      swiper.update();
      // Ensure centeredSlides remains enabled after resize
      swiper.params.centeredSlides = true;
      swiper.update();
    }, 150);
  });

  // Recalculate heights and update Swiper after all resources are loaded
  window.addEventListener("load", () => {
    setEqualHeight(".swiper-slide .service-card-1, .swiper-slide .service-card-2");
    swiper.update();
    // Ensure centeredSlides is enabled after load
    swiper.params.centeredSlides = true;
    swiper.update();
  });

  return swiper;
}

// Initialize Swiper after DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializeSwiper);
