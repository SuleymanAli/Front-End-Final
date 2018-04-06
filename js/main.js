$(document).ready(function(){
  $('.hero-slider').slick({
    dots: true,
    fade: true,
    arrows: false,
  });
  $('.service').slick({
    slidesToShow: 4,
    responsive: [{

      breakpoint: 1040,
      settings: {
        slidesToShow: 3,
      }

    }, {

      breakpoint: 880,
      settings: {
        slidesToShow: 2,
        arrows: false,
        dots: true
      }

    }, {

      breakpoint: 620,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true
      }
    }]
  });
  $('.manufacturers-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{

      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      }

    }, {

      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        dots: true,
        arrows: false,
      }

    }, {

      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        dots: true,
        arrows: false,
      }

    }, {

      breakpoint: 410,
      settings: {
        slidesToShow: 1,
        dots: true,
        arrows: false,
        centerMode: true,
        mobileFirst: true,
      }

    }]
  });
  $('.testimonials').slick({
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [{

      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      }

    }, {

      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      }

    }, {

      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
      }

    }]
  });
});