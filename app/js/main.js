function slider() {
  $('.slider-items').slick({
    arrows: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
  });
}
function initHolderBg() {
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
}
function searchfancy() {
  $("#search-fancy").on('click', function () {
    $.fancybox.open('<div class="message"><h2>Hello!</h2><p>You are awesome!</p></div>');
  });
}
function galeryfancy() {
  $('[data-fancybox="preview"]').fancybox({
    thumbs: {
      autoStart: true
    }
  });
}
function matchheight() {
  $(".services__matchheight-title").matchHeight();
  $(".services__matchheight-discription").matchHeight();
}
function dropdowns() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
  
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function burgermenu(){
  $("#navToggle").click(function() {
    $(this).toggleClass("active");
    $(".menu-wrap").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked"); 
  });
}



//Runs
$(document).ready(function(){
  slider();
  initHolderBg();
  searchfancy();
  galeryfancy();
  matchheight();
  burgermenu();
});
