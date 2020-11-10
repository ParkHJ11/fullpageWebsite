$(document).ready(function () {
  // Main Page Fullpage
  // #fullpage가 있으면
  if ($('#fullpage').length) {
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
  } // fullpage end

  // Main Page Slide
  if ($('.main-slides').length > 0) {
    var mySwiper = new Swiper('.main-slides', {
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
  } // main slides
  if ($('.testimonial-slides').length > 0) {
    var testimonialSwiper = new Swiper('.testimonial-slides', {
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  } // testimonial-slides

  // toggle Menu Open & close
  $('.nav-button').click(function () {
    $('.toggle-menu').addClass('active');
  });
  $('.toggle-menu .close').click(function () {
    $('.toggle-menu').removeClass('active');
  });

  // subpage header fixed
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $('.subpage nav').addClass('fixed');
      $('.logo img').attr('src', '../images/images_finish/logoImage.png');
    } else {
      $('.subpage nav').removeClass('fixed');
      $('.logo img').attr('src', '../images/images_finish/logo_white.png');
    }

    // back to top by scrollTop
    // 푸터가 상단에서 떨어진거리 - 800
    var footerOST = $('.footer').offset().top - 800;
    // 보다 스크롤 양이 많으면
    if ($(this).scrollTop() > footerOST) {
      $('.back_to_top').addClass('active');
    } else {
      $('.back_to_top').removeClass('active');
    }
  });

  // .about_btt를 클릭하면 화면상단 이동
  $('.about_btt').click(function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 500, 'easeOutQuint');
  });
}); // document ready
