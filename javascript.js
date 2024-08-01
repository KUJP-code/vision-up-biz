const swiper = new Swiper("#image-carousel", {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 0,
  loop: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".testimony-swiper-button-right",
    prevEl: ".testimony-swiper-button-left",
  },
  breakpoints: {
    576: {
      slidesPerView: 1.75,
      spaceBetween: 20,
    },
  },
  on: {
    slideChangeTransitionStart: function () {
      // Remove 'active' class from all slides
      document.querySelectorAll('.swiper-slide').forEach(slide => {
        slide.querySelector('.speech-bubble').classList.remove('active');
        slide.querySelector('.testimony-text').classList.remove('active');
        slide.querySelector('.testimony-name').classList.remove('active');
        slide.querySelector('.testimony-title').classList.remove('active');
      });
    },
    slideChangeTransitionEnd: function () {
      // Add 'active' class to the new active slide
      const activeSlide = document.querySelector('.swiper-slide-active');
      if (activeSlide) {
        activeSlide.querySelector('.speech-bubble').classList.add('active');
        activeSlide.querySelector('.testimony-text').classList.add('active');
        activeSlide.querySelector('.testimony-name').classList.add('active');
        activeSlide.querySelector('.testimony-title').classList.add('active');
      }
    }
  }
});

// Manually trigger the 'slideChangeTransitionEnd' event to apply 'active' classes on page load
swiper.on('init', function () {
  const initialActiveSlide = document.querySelector('.swiper-slide-active');
  if (initialActiveSlide) {
    initialActiveSlide.querySelector('.speech-bubble').classList.add('active');
    initialActiveSlide.querySelector('.testimony-text').classList.add('active');
    initialActiveSlide.querySelector('.testimony-name').classList.add('active');
    initialActiveSlide.querySelector('.testimony-title').classList.add('active');
  }
});

// Initialize Swiper
swiper.init();

// Add click event listener to the swiper container
document.querySelector('#image-carousel').addEventListener('click', (event) => {
  const slide = event.target.closest('.swiper-slide');
  if (slide) {
    const slideIndex = Array.from(document.querySelectorAll('.swiper-slide')).indexOf(slide);
    swiper.slideToLoop(slideIndex);
  }
});










