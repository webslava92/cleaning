$(function(){

  $('.header__formbox-btn, header__call-btn').on('click', function () {
    $(this).addClass('header__formbox--active');
    $('.header__formbox').toggleClass('header__formbox--active');
  });

  $('.header__form-btn').on('click', function () {
    $(this).addClass('header__formbox--active');
    $('.header__formbox').toggleClass('header__formbox--active');
  });

  new WOW().init();

  $("form").submit(function () { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", //Change
      data: th.serialize()
    }).done(function () {
      alert("Данные отправлены. Мы свяжемся с Вами в указанное время");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });

  $(".menu a, .footer a").on("click", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top - 105;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  window.onscroll = function () {
    scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 10) {
      $(".header__top-inner").css({ "background": "rgb(2, 51, 59, 0.9)" })
    }
    if (10 > scrolled) {
      $(".header__top-inner").css({ "background": "transparent" })
    }
  }

  $('.menu__btn').on('click', function () {
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.menu__items').toggleClass('menu__items--active');
  });

  $('.menu__link').on('click', function () {
    $('.menu__link').removeClass('menu__link--active');
  });
  
  $('.menu__link').on('click', function () {
    $(this).addClass('menu__item-link--active');
    $('.menu__btn').toggleClass('menu__btn--active');
    $('.menu__items').toggleClass('menu__items--active');
  });


  $('.reviews__items').slick({
    dots: true,
    infinite: true,
    speed: 300,
    fade: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    focusOnSelect: true,
  });

});