
import Swiper from 'swiper';

const mainSlider = new Swiper('.slider__swiper', {
  simulateTouch: true,
  touchRatio: 1,
	touchAngle: 45,
	grabCursor: true,

  slidesPerView: 3,
  watchOverflow: true,
  slideToClickedSlide: true,

  spaceBetween: 20,
  slidesPerGroup: 1,
  centeredSlides: true,

  initialSlide: 1,
  loop: true,

  speed: 800,

  effect: 'slide',

});

