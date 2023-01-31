import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const swiperQuotes = new Swiper('.gallery-slider', {
  navigation: {
    nextEl: '.swiper-gallery-button-next',
    prevEl: '.swiper-gallery-button-prev',
  },

  slidesPerView: 1,
  spaceBetween: 20,

  breakpoints : {
    640: {
      slidesPerView: "auto",
      centeredSlides: true,
      initialSlide: 1,
      spaceBetween: 20,
    }
  }
});
