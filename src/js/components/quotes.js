
import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const swiperQuotes = new Swiper('.slider-quotes', {

  slidesPerView: 1,

  navigation: {
    nextEl: '.swiper-quotes-button-next',
    prevEl: '.swiper-quotes-button-prev',
  },

  breakpoints : {
    640: {
      slidesPerView: "auto",
    }
  }
});
