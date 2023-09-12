// const carousel = document.querySelector(".noticeable");

// const dragging = function(event){
//     carousel.scrollLeft = event.pageX;
// }

// carousel.addEventListener("mousemove",dragging,false);
import Swiper, { Navigation, Pagination } from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

const swiper = new Swiper(".slide-content", {
    direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".slide-content .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".slide-content .swiper-button-next",
      prevEl: ".slide-content .swiper-button-prev",
    },
  });
