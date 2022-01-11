/*
$(document).scroll(function() {
    if($(window).scrollTop() > 10){

    $("#nav").css("background-color", "rgb(255, 255, 255)");

    }else if($(window).scrollTop() < 10){

    $("#nav").css("background-color", "rgba(255, 255, 255, 0)");

    }
});
*/

//counter
$('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
  
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
  
      duration: 1500,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
      }
  
    });
  
  
  
  });
  