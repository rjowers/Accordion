
 //$(".section1");
 //$(".words1");


 /*$('.section').on('click',function(){
    $('.words').addClass('goaway');
     $(this).removeClass('goaway');
 });
*/
$(".words1").addClass("goaway");

function click1 () {
    $(".words1").removeClass('goaway');
      $(".words2").addClass('goaway');
      $(".words3").addClass('goaway');
}

$(".section1").on('click',click1);




$(".words2").addClass("goaway");

function click2 () {
    $(".words2").removeClass('goaway');
    $(".words1").addClass('goaway');
    $(".words3").addClass('goaway');
}

$(".section2").on('click',click2);




$(".words3").addClass("goaway");

function click3 () {
    $(".words3").removeClass('goaway');
    $(".words2").addClass('goaway');
    $(".words1").addClass('goaway');
}

$(".section3").on('click',click3);
