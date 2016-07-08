$(window).on('scroll', function(){
  var height = $(window).scrollTop();
  $('.parallax-window .wrapper').addClass('wrapper-active')
  $('.animation').addClass('animation-active');
});

$('.parallax-window').parallax({imageSrc: './public/images/cuatro.JPG', speed:0.7, position:"-800px -800px"});
$('.parallax-header').parallax({speed: 0.4});

$('.feature').on('mouseover', function(e){
  $(this).addClass('active');
});

$('.feature').on('mouseout', function(e){
  $(this).removeClass('active');
});

$('.feature').on('click', function(e){
  $(this)
});



// Scroll Magic

var controller = new ScrollMagic.Controller();

// create a scene
new ScrollMagic.Scene({
      triggerElement: "#features"
    })
    .setClassToggle(".navbar", "navbar-active") // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller

new ScrollMagic.Scene({
      triggerElement: "#parallax-window",
      duration: 400
    })
    .setPin("#my-sticky-element") // pins the element for the the scene's duration
    .addTo(controller);

new ScrollMagic.Scene({
      offset: 320
    })
    .setClassToggle(".slogan", "slogan-active")
    .addTo(controller)
