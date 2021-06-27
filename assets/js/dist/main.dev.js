"use strict";

/* (function(){
    $('#works_slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear'
    });
    
    
    $('#team_slider').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '10px'
    });
}); */
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
    controls: false
  });
  $('#prev_slide-team').on('click', function () {
    return team_slider.goToPrevSlide();
  });
  $('#next_slide-team').on('click', function () {
    return team_slider.goToNextSlide();
  });
});