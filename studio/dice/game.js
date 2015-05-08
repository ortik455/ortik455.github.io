var pages = ["ball.html", "haiti.html", "missile.html", "natgeo.html", "oj.html",
"pope.html", "smoke.html", "soldier.html", "sun.html", "train.html"]; 
 
$(document).on('click', '.start-over', function() {
    var random_num = Math.floor(Math.random() * pages.length);
    window.location = pages[random_num];
});

$('.select-button, .start-over').click(function() {
    var random_num = Math.floor(Math.random() * pages.length);
    window.location = pages[random_num];
});


$( ".s:nth-child(even)" ).draggable({
 // axis: "y",
  containment: '.tile-wrapper',
  start: function() {
    $('.s').removeClass('current');
    $(this).css({ 'z-index' : 500 });
    $(this).addClass('current');
  },
  stop: function() {
    // $(this).css('z-index', 0);
  }
});

$( ".s:nth-child(odd)" ).draggable({
  //axis: "x",
  containment: '.tile-wrapper',
  start: function() {
    $('.s').removeClass('current');
    $(this).css({ 'z-index' : 500 });
    $(this).addClass('current');
  },
  stop: function() {
    // $(this).css('z-index', 0);
  }
});

/*$('.t-button').click(function() {
    var $tile = $('.s.current');
    $tile.css({ 'opacity' : .5 });
});*/
    
$('.t-button').click(function(){
    var $tile = $('.s.current');

    if ($tile.css('opacity') == 1) {
        $tile.css('opacity','0.8');
    } else if ($tile.css('opacity') >= 0.80) {
        $tile.css('opacity','0.6');
    } else if ($tile.css('opacity') >= 0.60) {
        $tile.css('opacity','0.4');
    } else if ($tile.css('opacity') >= 0.40) {
        $tile.css('opacity','0.2');
    } else {
        $tile.css('opacity','1');
    }
}); 


$('.f-button').click(function() {
    var $tile = $('.s.current');
    if ($tile.data("flip") == "true") {
    $tile.css({ "-webkit-transform" : "rotateY(0deg)" });
       $('.s.current').data("flip","false");

    } else {
    $tile.css({ "-webkit-transform" : "rotateY(+180deg)" });
    $tile.data("flip","true");
    
    }
});


$('.r-button').click(function() {
    var $tile = $('.s.current');
    $tile.css({ "-webkit-transform" : "rotate(+90deg)" });
});

$('.finish-button').click(function(event) {
    event.preventDefault();
    var div_to_reveal = $(this).data('reveal');
    
    $(div_to_reveal).css('display', 'block');
    $('.finish-button').addClass('start-over');
});

var thover=true;
$(".t-button").mouseenter(function(){
	if (thover==true){
		$(".hover-t").fadeIn(200);
	} 
});
$(".t-button").mouseleave(function(){
	if (thover==true){
		$(".hover-t").fadeOut(400);
	} 
});

var fhover=true;
$(".f-button").mouseenter(function(){
	if (fhover==true){
		$(".hover-f").fadeIn(200);
	} 
});
$(".f-button").mouseleave(function(){
	if (fhover==true){
		$(".hover-f").fadeOut(400);
	} 
});

var rhover=true;
$(".r-button").mouseenter(function(){
	if (rhover==true){
		$(".hover-r").fadeIn(200);
	} 
});
$(".r-button").mouseleave(function(){
	if (rhover==true){
		$(".hover-r").fadeOut(400);
	} 
});