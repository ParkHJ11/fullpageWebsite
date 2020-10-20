$(document).ready(function () {
  // Main Page Fullpage
  $('#fullpage').fullpage({
    afterLoad: function (origin, destination, direction) {
      // using index
      // destination의 인덱스번호가 0보다 크면(첫페이지가 아니면) 풀페이지nav를 표시
      if (destination.index > 0) {
        $('.fixed-nav').fadeIn();
      } else {
        $('.fixed-nav').fadeOut();
      }

      $('.fixed-nav').find('a').removeClass('active');
      $('.fixed-nav').find('a').eq(destination.index).addClass('active');
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

});