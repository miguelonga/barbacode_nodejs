$(window).on('scroll', function(){
  var height = $(window).scrollTop();
  if (height > 100) {
    $('.wrapper').addClass('wrapper-active')
  };
  if (height < 100) {
    $('.wrapper').removeClass('wrapper-active')
  };
});

$('.feature').on('mouseover', function(e){
  $(this).addClass('active');
});

$('.feature').on('mouseout', function(e){
  $(this).removeClass('active');
});

$('.feature').on('click', function(e){
  $(this)
});