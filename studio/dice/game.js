$( ".s:nth-child(even)" ).draggable({
  axis: "y",
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
  axis: "x",
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

$('.t-button').click(function() {
    var $tile = $('.s.current');
    
    $tile.css({ 'opacity' : .5 });
});