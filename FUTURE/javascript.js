document.addEventListener("DOMContentLoaded", function () {
  
  
  // Initialize Swiper for testimony carousel
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
    on: {
      init: function () {
        const initialActiveSlide = document.querySelector('.swiper-slide-active');
        if (initialActiveSlide) {
          initialActiveSlide.querySelector('.speech-bubble').classList.add('active');
          initialActiveSlide.querySelector('.testimony-text').classList.add('active');
          initialActiveSlide.querySelector('.testimony-name').classList.add('active');
          initialActiveSlide.querySelector('.testimony-title').classList.add('active');
        }
      },
      slideChangeTransitionStart: function () {
        document.querySelectorAll('.swiper-slide').forEach(slide => {
          slide.querySelector('.speech-bubble').classList.remove('active');
          slide.querySelector('.testimony-text').classList.remove('active');
          slide.querySelector('.testimony-name').classList.remove('active');
          slide.querySelector('.testimony-title').classList.remove('active');
        });
      },
      slideChangeTransitionEnd: function () {
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
  

  
  // Initialize Swiper for image carousel
  const imageCarouselSwiper = new Swiper("#service-carousel", {
    slidesPerView: 1.1,
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
    on: {
      init: function () {
        updateSlideHeights(this);
      },
      slideChangeTransitionEnd: function () {
        updateSlideHeights(this);
      }
    }
  });

  function updateSlideHeights(swiper) {
    // Get the tallest slide height
    let maxHeight = 0;
    swiper.slides.forEach(slide => {
      slide.style.height = 'auto'; // Reset height
      maxHeight = Math.max(maxHeight, slide.offsetHeight);
    });

    // Apply the max height to all slides
    swiper.slides.forEach(slide => {
      slide.style.height = `${maxHeight}px`;
    });
  }

  
});