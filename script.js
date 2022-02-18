$(document).ready(function(){
  $(window).scroll(function(){
      $("#fadelogo").css("opacity", 1 - $(window).scrollTop() / ($('.centered.segment').height() / 2));
  });
});

$(document).ready(function(){
  $(window).scroll(function(){
      $(".seven").css("opacity", 0.8 + $(window).scrollTop() / ($('.centered.segment').height() / 2));
  });
});

$(document).ready(function(){
  $(window).scroll(function(){
      $(".five").css("opacity", 0.8 + $(window).scrollTop() / ($('.centered.segment').height() / 2));
  });
});

$(window).on("load",function(){
  $(".loader-wrapper").delay(1000).fadeOut("slow");
});

$(document).ready(function() {
  $('.ui.list.time .item').eq(new Date().getDay() -1).addClass('today');
  });


  var slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }