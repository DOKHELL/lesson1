$(function () {
    $('.slider-items').slick({
        arrows: true,
        dots: true,
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    });

});
$("#test").on('click', function () {

    $.fancybox.open('<div class="message"><h2>Hello!</h2><p>You are awesome!</p></div>');

});