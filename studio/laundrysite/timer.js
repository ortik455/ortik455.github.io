var count=10;

setInterval(function(){ 
  
  $(".timer").html(count + ":00");
  if (count == 0) {
    //go to next page
    window.location = 'seven.html';
  } else {
     count--;
  }
 
  }, 1000);
  