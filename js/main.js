$(document).ready(function () {
 const flowersSlider = new Swiper('.flowers-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 6,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    430: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 6,
    }
  }

});
const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
});
$("#review-1").on('click', function() {

  $.fancybox.open([
    {
      src  : '../img/reviews-photo/bouquet-1.jpg',
      opts : {
        caption : '',
        thumb   : '../img/reviews-photo/bouquet-1.jpg'
      }
    },
    {
      src  : '../img/reviews-photo/bouquet-2.jpg',
      opts : {
        caption : '',
        thumb   : '../img/reviews-photo/bouquet-2.jpg'
      }
    }
  ], {
    loop : true,
    thumbs : {
      autoStart : true
    }
  });

});
});