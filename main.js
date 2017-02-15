
 //$(".section1");
 //$(".words1");


 /*$('.section').on('click',function(){
    $('.words').addClass('goaway');
     $(this).removeClass('goaway');
 });
*/




$(".words1").addClass("close");


var goaway
function click1 () {
    $(".first-pic").removeClass('close').addClass('open');
    $(".second-pic ").addClass('close').removeClass('open');
    $(".fourth-pic ").addClass('close').removeClass('open');
    $(".fifth-pic ").addClass('close').removeClass('open');

      //$(".words1").addClass('open');
      //$(".words2").addClass('close');
      //$(".words3").addClass('close');
}

$(".section1").on('click',click1);




$(".words2").addClass("close");

var goaway2
function click2 () {
  $(".words2").removeClass('close').addClass('open');
  $(".words1").addClass('close').removeClass('open');
  $(".words3").addClass('close').removeClass('open');

}

$(".section2").on('click',click2);




$(".words3").addClass("close");

var goaway3
function click3 () {
  $(".words3").removeClass('close').addClass('open');
  $(".words2").addClass('close').removeClass('open');
  $(".words1").addClass('close').removeClass('open');

}

$(".section3").on('click',click3);
