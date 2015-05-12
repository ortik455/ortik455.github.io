var App = {
    clicks : 0,
    tile_clicks : 0
};

var pages = ["ball.html", "haiti.html", "missile.html", "natgeo.html", "oj.html",
"pope.html", "smoke.html", "soldier.html", "sun.html", "train.html"]; 
 
$(document).on('click', '.start-over', function() {
    if (App.clicks == 2) {
        var random_num = Math.floor(Math.random() * pages.length);
        window.location = pages[random_num];
    }
});

$('.select-button').click(function() {
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
    App.tile_clicks = 0;
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

// ???
$('.r-button').click(function() {
    var $tile = $('.s.current');
    // if ($tile.data("turn") == true) {
    //     alert('hi')
    //     $tile.css({ "-webkit-transform" : "rotate(0deg)" });
    //   $('.s.current').data("turn","false");

    if (App.tile_clicks == 0) {
        $tile.css({ "-webkit-transform" : "rotate(+90deg)" });
        App.tile_clicks += 1;
    } else if (App.tile_clicks == 1) {
        $tile.css({ "-webkit-transform" : "rotate(+180deg)" });
        App.tile_clicks += 1;
    } else if (App.tile_clicks == 2) {
        $tile.css({ "-webkit-transform" : "rotate(+270deg)" });
        App.tile_clicks += 1;
    } else {
        $tile.css({ "-webkit-transform" : "rotate(+360deg)" });
        App.tile_clicks = 0;
    }
});

$('.finish-button').click(function(event) {
    event.preventDefault();
    var div_to_reveal = $(this).data('reveal');
    
    $(div_to_reveal).css('display', 'block');
    $('.finish-button').addClass('start-over').html('start over');
    App.clicks += 1;
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