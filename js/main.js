$(document).ready(function () {
  // Main Page Fullpage
  $('#fullpage').fullpage({
    afterLoad: function (origin, destination, direction) {
      // using index
      // destination의 인덱스번호가 0보다 크면(첫페이지가 아니면) 풀페이지nav를 표시
      if (destination.index > 0) {
        $('.fixed-nav').fadeIn();
        $('.header nav').addClass('fixed');
        $('.logo img').attr('src', 'images/images_finish/logoImage.png');

        if (destination.index == 1 || destination.index == 3) {
          $('.fixed-nav').find('a').removeClass('active');
          $('.fixed-nav').find('a').eq(destination.index).addClass('active-black');
        } else {
          $('.fixed-nav').find('a').removeClass('active-black');
          $('.fixed-nav').find('a').eq(destination.index).addClass('active');
        }
      } else {
        $('.fixed-nav').fadeOut();
        $('.header nav').removeClass('fixed');
        $('.logo img').attr('src', 'images/images_finish/logo_white.png');
      }
      if (destination.index == 5) {
        $('.back_to_top').addClass('active');
      } else {
        $('.back_to_top').removeClass('active');
      }
    },
  });

  // Main Page Slide
  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}); // document ready
