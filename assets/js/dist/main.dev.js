"use strict";

$(function () {
  var works_slider = $('#works_slider').lightSlider({
    item: 1,
    slideMove: 1,
    controls: false,
    loop: true
  });
  $('#prev_slide').on('click', function () {
    return works_slider.goToPrevSlide();
  });
  $('#next_slide').on('click', function () {
    return works_slider.goToNextSlide();
  });
  var team_slider = $('#team_slider').lightSlider({
    item: 3,
    slideMove: 1,
    slideMargin: 30,
    controls: false,
    loop: true,
    responsive: [{
      breakpoint: 920,
      settings: {
        item: 2
      }
    }, {
      breakpoint: 601,
      settings: {
        item: 1
      }
    }],
    onSliderLoad: function onSliderLoad(el) {
      // фикс для лейзилоада в лайтслайдере
      var showActiveSlides = function showActiveSlides(entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target);
          }
        });
      };

      var imageWidth = el.find("li").outerWidth() + "px";
      var observer = new window.IntersectionObserver(showActiveSlides, {
        root: el.parent()[0],
        rootMargin: "0px " + imageWidth + " 0px " + imageWidth
      });
      el.find("li img").each(function () {
        observer.observe(this);
      });
    }
  });
  $('#prev_slide-team').on('click', function () {
    return team_slider.goToPrevSlide();
  });
  $('#next_slide-team').on('click', function () {
    return team_slider.goToNextSlide();
  });
  $(".hamburger, #mobile_shadow").on('click', function () {
    $(".hamburger").toggleClass("is-active");
    $("body").toggleClass("open");
    $('#mobile_shadow').toggleClass('open_shadow');
    $('.mobile_menu').toggleClass('open_menu');
  });
  $('.mobile_menu a, #menu_close').on('click', function () {
    $('.mobile_menu').toggleClass('open_menu');
    $('#mobile_shadow').toggleClass('open_shadow');
    $(".hamburger").toggleClass("is-active");
  });
  $('a.scroll').on('click', function (e) {
    e.preventDefault();
    var top = $($(this).attr('href')).offset().top;
    $('html, body').animate({
      scrollTop: top
    }, 400);
  });
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 700) {
      $('header').addClass('Header');
      $("div.header").addClass("mobile-header");
    } else {
      $('header').removeClass('Header');
      $("div.header").removeClass("mobile-header");
    }
  });
  $(".to_top").on('click', function () {
    $("html, body").animate({
      scrollTop: 0
    }, 400);
  });
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 500) {
      $(".to_top").addClass("btn_active");
    } else {
      $(".to_top").removeClass("btn_active");
    }
  });
});
window.addEventListener('scroll', function () {
  var offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.7 + 'px';
});