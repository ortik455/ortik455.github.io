var photos = 
["http://graphics8.nytimes.com/images/2008/07/01/science/0709-lede-IRAN.jpg", 
"http://www.coverbrowser.com/image/national-geographic/1034-3.jpg",
"http://img.timeinc.net/time/magazine/archive/covers/1994/1101940627_400.jpg",
"http://www.sree.net/teaching/lateditors_files/7235256.jpg",
"http://images.china.cn/images1/200802/421701.jpg",
"https://ethicsinediting.files.wordpress.com/2009/04/charlotteobserver1.jpg",
"http://upload.wikimedia.org/wikipedia/en/b/b7/Beirut-smoke.jpg",
"http://www.ronruelle.com/images/ccaart131week5/ccadetrich2.jpg",
"http://morris1991.bhstudents.net/wp-content/uploads/2014/04/pope2.jpg",
"https://damnuglyphotography.files.wordpress.com/2009/04/effed_with.jpg?w=640"];

var selectedphoto = false;

$(".select-button").click(function() {

$(".image-wrapper").html('<img src="' + photos[Math.floor(Math.random()*photos.length)]+ '">');
  
});