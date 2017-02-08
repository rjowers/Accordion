
 //$(".section1");
 //$(".words1");


 /*$('.section').on('click',function(){
    $('.words').addClass('goaway');
     $(this).removeClass('goaway');
 });
*/


$("section").on("mouseover", expandBox);

function expandBox(event){
  var target = event.currentTarget;
  target = $(target);
  $(".section1").removeClass("expanded").addClass("shrunk");
  $(".section2").removeClass("expanded").addClass("shrunk");
  $(".section3").removeClass("expanded").addClass("shrunk");
  target.removeClass("shrunk noClass").addClass( "expanded" );
}

$(".words1").addClass("close");


var goaway
function click1 (event) {
    $(".words1").removeClass('close').addClass('open');
    $(".words2").addClass('close').removeClass('open');
    $(".words3").addClass('close').removeClass('open');


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
