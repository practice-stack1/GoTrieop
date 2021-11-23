import mobMenu from './basic/mobileMenu';
import slowmotion from './basic/slowAnchorMove';
import fixMenu from './basic/fixMenu';
import './basic/mouse-parallax';
import './basic/swiperConfig';

window.addEventListener('DOMContentLoaded', () => {
  mobMenu('.header__burger', '.menu', '.menu .menu__item', '_active');
  slowmotion('[href^="#"]');
  fixMenu('.header');
});

