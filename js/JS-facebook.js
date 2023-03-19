$('.toggle-switch').click(function() {
  $(this).toggleClass('active')
})
$('.toggle-switch.right').click(function() {
  $('.box-winges.right').toggleClass('d-none')
})
$('.toggle-switch.left').click(function() {
  $('.box-winges.left').toggleClass('d-none')
})
$('.toggle-switch.dark').click(function() {
  $(document.querySelectorAll('html')).toggleClass('active')
})
$('.mega-menu-control').click(function() {
  $('.mega-menu-setting').toggleClass('active')
})

// Carousel

$(document).ready(function(){
  $(".owl-stories").owlCarousel({
      nav:true,
      dots:false,
      margin:10,
      responsive:{
          0:{
              items:2,
          },
          567:{
              items:3,
          },
          767:{
              items:4,
          },
      }
  }
  );
});