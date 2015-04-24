var pics = 
["http://g4.psychcentral.com/lib/wp-content/uploads/2010/11/daydreaming.jpg",
"http://cache.oxy.edu/sites/default/files/assets/Admission_Blog/Sleep.jpg",
"http://www.brazencareerist.com/blog/wp-content/uploads/2013/02/pile-of-papers.jpg",
"http://www.zenforyou.ca/wpi/wp-content/uploads/2013/11/burnout1.jpg",
"http://www.healthyblackwoman.com/wp-content/uploads/2014/01/download54.jpeg",
"https://learn2balance.files.wordpress.com/2013/02/bigstockphoto_stress_asian_scholar_5099246.jpg",
"http://www.sprottshaw.com/wp-content/uploads/783761611.jpg",
"https://teenenthusiasm.files.wordpress.com/2012/11/image1.png",
"http://connectnigeria.com/articles/wp-content/uploads/2012/09/Dont-Fight-with-Stress.jpg",
"http://thumbs.media.smithsonianmag.com//filer/89/c3/89c31752-f362-4b98-bca9-a53c4e6b07fa/too-much-homework-520.jpg__800x600_q85_crop.jpg",
"http://www.brainbalancecenters.com/wp-content/uploads/2015/04/Too-Much-Homework.jpeg",
"http://lasernafreelancer.com/wp-content/uploads/2015/03/stress.jpg",
"https://pittbradford.files.wordpress.com/2011/12/stressful-people-fordec5post.jpg"];

var quotes =
["In order to get to the top we have to experience all of the bottom.",
"It does not matter how slowly you go as long as you do not stop.",
"Perseverance is failing 19 times and succeeding the 20th.",
"Always do your best. What you plant now, you will harvest later.",
"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
"Just do it.",
"If you can dream it, you can do it.",
"In order to succeed, we must first believe that we can.",
"Failure will never overtake me if my determination to succeed is strong enough.",
"If you're going through hell keep going.",
"Don't let what you cannot do interfere with what you can do.",
"&iexcl;Si se puede!"];

var selectedquote = false;

$(".button").click(function() {
  
  var nextquote = quotes[Math.floor(Math.random()*quotes.length)];
  
  while (selectedquote == nextquote) {
    nextquote = quotes[Math.floor(Math.random()*quotes.length)];
  }
  
  selectedquote = nextquote;
  
  $(".quote-holder").html(nextquote);

$(".photo-holder").html('<img src="' + pics[Math.floor(Math.random()*pics.length)]+ '">');
  
});

/*.append for the images. */
