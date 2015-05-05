var pages = ["ball.html", "haiti.html", "missile.html", "natgeo.html", "oj.html",
"pope.html", "smoke.html", "soldier.html", "sun.html", "train.html"]; 
 

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
    $tile.css({ "-webkit-transform" : "rotateY(+180deg)" });
});

$('.r-button').click(function() {
    var $tile = $('.s.current');
    $tile.css({ "-webkit-transform" : "rotate(+90deg)" });
});
