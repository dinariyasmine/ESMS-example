let mySwiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  slidesPerView: 3,
  loopPreventsSlide: true,
  centeredSlides: true,
  loop: true,

  autoplay: {
    delay: 0
  },
  loop: true,
  allowTouchMove: false,
  slideActiveClass: 'active-sp',
  speed: 3000,
  slideDuplicateActiveClass: 'active-sp-duplicate'
});
const sliderSP = document.querySelector('.swiper-container');

sliderSP.addEventListener('mouseover', function (e) {
  mySwiper.autoplay.stop();
});
sliderSP.addEventListener('mouseout', function (e) {
  mySwiper.autoplay.start();
});
let swiperJ = new Swiper('.mySwiper1', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    debugger: true
  }
});



var box =document.getElementsByClassName("box-1")
box.classList.add("box-1-hover");