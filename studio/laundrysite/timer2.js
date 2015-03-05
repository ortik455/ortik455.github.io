var count=10;

setInterval(function(){ 
  
  $(".timer2").html(count + ":00");
  if (count == 0) {
    //go to next page
    window.location = 'twelve.html';
  } else {
     count--;
  }
 
  }, 1000);