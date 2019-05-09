$(function () {
  $('.slider-items').slick({
    arrows: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',

  });

});
$(function initHolderBg() {
  "use strict";
  $('.slider-items .slider-item .slider-item__img').each(function () {
    var imgHolder = $(this),
      img = imgHolder.find('img'),
      imgSrc = img.attr('src');
    if (!!imgHolder.length && !!img.length && !!imgSrc) {
      imgHolder.css({
        backgroundImage: 'url(' + imgSrc + ')',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        backgroundRepeat: 'no-repeat',
        height: '100%'
      });
      img.remove();
    }
  });
})
$("#search-fancy").on('click', function () {
  $.fancybox.open('<div class="message"><h2>Hello!</h2><p>You are awesome!</p></div>');
});
$('[data-fancybox="preview"]').fancybox({
  thumbs: {
    autoStart: true
  }
});
$(function () {
  var link = $('.m-menu-link');
  var close = $('.close-menu');
  var menu = $('.m-menu');

  link.on('click', function (event) {
    event.preventDefault();
    menu.toggleClass('m-menu__active');
  });
  close.on('click', function (event) {
    event.preventDefault();
    menu.toggleClass('m-menu__active');
  });
});
$(function () {
  $('.services__matchheight').matchHeight();
});