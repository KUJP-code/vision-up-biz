const swiper = new Swiper("#image-carousel", {
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
