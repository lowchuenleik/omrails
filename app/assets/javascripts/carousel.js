var $item = $('.carousel .item'); 
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight); 
$item.addClass('full-screen');

document.addEventListener("turbolinks:load", function() {
    console.log('It works on each visit!');
  $('.carousel').carousel({
    interval: 6000,
    pause: "false"
  });
});

