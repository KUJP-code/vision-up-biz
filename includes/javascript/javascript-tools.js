// Initialize Swiper for testimony carousel
const testimonySwiper = new Swiper("#sample-carousel", {
  slidesPerView: 1.75,
  centeredSlides: true,
  spaceBetween: 110,
  loop: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".sample-swiper-button-right",
    prevEl: ".sample-swiper-button-left",
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

      // Scroll to the right on load
      this.slideTo(1, 0); // Slide to index 1 (second slide), with 0 milliseconds transition
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

// Utility function to clear active classes
function clearActiveClasses(slide) {
  if (!slide) return;
  const speechBubble = slide.querySelector('.sample-box');
  const text = slide.querySelector('.testimony-text');
  const name = slide.querySelector('.testimony-name');
  const title = slide.querySelector('.testimony-title');

  if (speechBubble) speechBubble.classList.remove('active');
  if (text) text.classList.remove('active');
  if (name) name.classList.remove('active');
  if (title) title.classList.remove('active');
}

// Utility function to apply active classes
function applyActiveClasses(slide) {
  if (!slide) return;
  const speechBubble = slide.querySelector('.sample-box');
  const text = slide.querySelector('.testimony-text');
  const name = slide.querySelector('.testimony-name');
  const title = slide.querySelector('.testimony-title');

  if (speechBubble) speechBubble.classList.add('active');
  if (text) text.classList.add('active');
  if (name) name.classList.add('active');
  if (title) title.classList.add('active');
}
