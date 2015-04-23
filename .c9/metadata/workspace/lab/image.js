{"filter":false,"title":"image.js","tooltip":"/lab/image.js","undoManager":{"mark":100,"position":100,"stack":[[{"group":"doc","deltas":[{"start":{"row":38,"column":15},"end":{"row":38,"column":16},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":23},"end":{"row":38,"column":27},"action":"remove","lines":["poem"]},{"start":{"row":38,"column":23},"end":{"row":38,"column":24},"action":"insert","lines":["q"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":24},"end":{"row":38,"column":25},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":25},"end":{"row":38,"column":26},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":26},"end":{"row":38,"column":27},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":27},"end":{"row":38,"column":28},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":28},"end":{"row":38,"column":29},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":17},"end":{"row":28,"column":18},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":15},"end":{"row":32,"column":16},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":23},"end":{"row":32,"column":24},"action":"remove","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":0},"end":{"row":61,"column":3},"action":"remove","lines":["$(\".button\").click(function() {","  ","  var nextquote = quote[Math.floor(Math.random()*quotes.length)];","  ","  while (selectedquotes == nextquotes) {","    nextquotes = quotes[Math.floor(Math.random()*quotes.length)];","  }","  ","  selectedquotes = nextquotes;","  ","  $(\".poem-holder\").html(nextpoem);","","  $(\".cat-holder\").html('<img src=\"' + cats[Math.floor(Math.random()*cats.length)]+ '\">');","  ","  var newheight = (Math.floor(Math.random() * 100) + 100) + \"px\";","","$(\".line\").css(\"height\", newheight);","  ","  ","for (var increment = 0; increment < 100; increment++) {","  $(\"body\").append(\"<div class='dot'></div>\"); ","}","","$(\".dot\").each(function() {","  var newtop = Math.floor(Math.random()*100) + \"%\";","  var newleft = Math.floor(Math.random()*100) + \"%\";","  $(this).css(\"top\",newtop);","  $(this).css(\"left\",newleft);","});","  ","  ","});"]},{"start":{"row":30,"column":0},"end":{"row":63,"column":3},"action":"insert","lines":["var selectedpoem = false;","","$(\".go-button\").click(function() {","  ","  var nextpoem = poems[Math.floor(Math.random()*poems.length)];","  ","  while (selectedpoem == nextpoem) {","    nextpoem = poems[Math.floor(Math.random()*poems.length)];","  }","  ","  selectedpoem = nextpoem;","  ","  $(\".poem-holder\").html(nextpoem);","","  $(\".cat-holder\").html('<img src=\"' + cats[Math.floor(Math.random()*cats.length)]+ '\">');","  ","  var newheight = (Math.floor(Math.random() * 100) + 100) + \"px\";","","$(\".line\").css(\"height\", newheight);","  ","  ","for (var increment = 0; increment < 100; increment++) {","  $(\"body\").append(\"<div class='dot'></div>\"); ","}","","$(\".dot\").each(function() {","  var newtop = Math.floor(Math.random()*100) + \"%\";","  var newleft = Math.floor(Math.random()*100) + \"%\";","  $(this).css(\"top\",newtop);","  $(this).css(\"left\",newleft);","});","  ","  ","});"]}]}],[{"group":"doc","deltas":[{"start":{"row":28,"column":26},"end":{"row":30,"column":25},"action":"remove","lines":["","","var selectedpoem = false;"]}]}],[{"group":"doc","deltas":[{"start":{"row":30,"column":4},"end":{"row":30,"column":7},"action":"remove","lines":["go-"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":10},"end":{"row":32,"column":14},"action":"remove","lines":["poem"]},{"start":{"row":32,"column":10},"end":{"row":32,"column":15},"action":"insert","lines":["quote"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":18},"end":{"row":32,"column":22},"action":"remove","lines":["poem"]},{"start":{"row":32,"column":18},"end":{"row":32,"column":23},"action":"insert","lines":["quote"]}]}],[{"group":"doc","deltas":[{"start":{"row":32,"column":50},"end":{"row":32,"column":54},"action":"remove","lines":["poem"]},{"start":{"row":32,"column":50},"end":{"row":32,"column":55},"action":"insert","lines":["quote"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":17},"end":{"row":34,"column":21},"action":"remove","lines":["poem"]},{"start":{"row":34,"column":17},"end":{"row":34,"column":22},"action":"insert","lines":["quote"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":8},"end":{"row":35,"column":12},"action":"remove","lines":["poem"]},{"start":{"row":35,"column":8},"end":{"row":35,"column":13},"action":"insert","lines":["quote"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":16},"end":{"row":35,"column":20},"action":"remove","lines":["poem"]},{"start":{"row":35,"column":16},"end":{"row":35,"column":21},"action":"insert","lines":["quote"]}]}],[{"group":"doc","deltas":[{"start":{"row":35,"column":48},"end":{"row":35,"column":52},"action":"remove","lines":["poem"]},{"start":{"row":35,"column":48},"end":{"row":35,"column":53},"action":"insert","lines":["quote"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":10},"end":{"row":38,"column":14},"action":"remove","lines":["poem"]},{"start":{"row":38,"column":10},"end":{"row":38,"column":15},"action":"insert","lines":["quote"]}]}],[{"group":"doc","deltas":[{"start":{"row":38,"column":22},"end":{"row":38,"column":26},"action":"remove","lines":["poem"]},{"start":{"row":38,"column":22},"end":{"row":38,"column":27},"action":"insert","lines":["quote"]}]}],[{"group":"doc","deltas":[{"start":{"row":40,"column":6},"end":{"row":40,"column":10},"action":"remove","lines":["poem"]},{"start":{"row":40,"column":6},"end":{"row":40,"column":11},"action":"insert","lines":["quote"]}]}],[{"group":"doc","deltas":[{"start":{"row":40,"column":30},"end":{"row":40,"column":34},"action":"remove","lines":["poem"]},{"start":{"row":40,"column":30},"end":{"row":40,"column":35},"action":"insert","lines":["quote"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":6},"end":{"row":42,"column":9},"action":"remove","lines":["cat"]},{"start":{"row":42,"column":6},"end":{"row":42,"column":11},"action":"insert","lines":["photo"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":41},"end":{"row":42,"column":44},"action":"remove","lines":["cat"]},{"start":{"row":42,"column":41},"end":{"row":42,"column":44},"action":"insert","lines":["pic"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":71},"end":{"row":42,"column":74},"action":"remove","lines":["cat"]},{"start":{"row":42,"column":71},"end":{"row":42,"column":74},"action":"insert","lines":["pic"]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":32},"end":{"row":50,"column":35},"action":"remove","lines":["dot"]},{"start":{"row":50,"column":32},"end":{"row":50,"column":44},"action":"insert","lines":["photo-holder"]}]}],[{"group":"doc","deltas":[{"start":{"row":53,"column":4},"end":{"row":53,"column":7},"action":"remove","lines":["dot"]},{"start":{"row":53,"column":4},"end":{"row":53,"column":16},"action":"insert","lines":["photo-holder"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":2},"end":{"row":42,"column":92},"action":"remove","lines":["$(\".photo-holder\").html('<img src=\"' + pics[Math.floor(Math.random()*pics.length)]+ '\">');"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":1},"end":{"row":42,"column":2},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":0},"end":{"row":42,"column":1},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":41,"column":0},"end":{"row":42,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":2},"end":{"row":45,"column":35},"action":"remove","lines":["var newheight = (Math.floor(Math.random() * 100) + 100) + \"px\";","","$(\".line\").css(\"height\", newheight)"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":2},"end":{"row":43,"column":3},"action":"remove","lines":[";"]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":1},"end":{"row":43,"column":2},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":43,"column":0},"end":{"row":43,"column":1},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":2},"end":{"row":43,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":1},"end":{"row":42,"column":2},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":0},"end":{"row":42,"column":1},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":41,"column":0},"end":{"row":42,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":30},"end":{"row":34,"column":34},"action":"remove","lines":["poem"]},{"start":{"row":34,"column":30},"end":{"row":34,"column":31},"action":"insert","lines":["q"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":31},"end":{"row":34,"column":32},"action":"insert","lines":["u"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":32},"end":{"row":34,"column":33},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":33},"end":{"row":34,"column":34},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":34,"column":34},"end":{"row":34,"column":35},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":1},"end":{"row":26,"column":2},"action":"remove","lines":["¡"]}]}],[{"group":"doc","deltas":[{"start":{"row":26,"column":1},"end":{"row":26,"column":8},"action":"insert","lines":["&iexcl;"]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":0},"end":{"row":53,"column":3},"action":"remove","lines":["$(\".photo-holder\").each(function() {","  var newtop = Math.floor(Math.random()*100) + \"%\";","  var newleft = Math.floor(Math.random()*100) + \"%\";","  $(this).css(\"top\",newtop);","  $(this).css(\"left\",newleft);","});"]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":0},"end":{"row":48,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":1},"end":{"row":47,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":49,"column":3},"end":{"row":50,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":50,"column":0},"end":{"row":51,"column":0},"action":"insert","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":51,"column":0},"end":{"row":85,"column":0},"action":"insert","lines":["var selectedpoem = false;","","$(\".go-button\").click(function() {","  ","  var nextpoem = poems[Math.floor(Math.random()*poems.length)];","  ","  while (selectedpoem == nextpoem) {","    nextpoem = poems[Math.floor(Math.random()*poems.length)];","  }","  ","  selectedpoem = nextpoem;","  ","  $(\".poem-holder\").html(nextpoem);","","  $(\".cat-holder\").html('<img src=\"' + cats[Math.floor(Math.random()*cats.length)]+ '\">');","  ","  var newheight = (Math.floor(Math.random() * 100) + 100) + \"px\";","","$(\".line\").css(\"height\", newheight);","  ","  ","for (var increment = 0; increment < 100; increment++) {","  $(\"body\").append(\"<div class='dot'></div>\"); ","}","","$(\".dot\").each(function() {","  var newtop = Math.floor(Math.random()*100) + \"%\";","  var newleft = Math.floor(Math.random()*100) + \"%\";","  $(this).css(\"top\",newtop);","  $(this).css(\"left\",newleft);","});","  ","  ","});",""]}]}],[{"group":"doc","deltas":[{"start":{"row":76,"column":0},"end":{"row":81,"column":3},"action":"remove","lines":["$(\".dot\").each(function() {","  var newtop = Math.floor(Math.random()*100) + \"%\";","  var newleft = Math.floor(Math.random()*100) + \"%\";","  $(this).css(\"top\",newtop);","  $(this).css(\"left\",newleft);","});"]}]}],[{"group":"doc","deltas":[{"start":{"row":67,"column":0},"end":{"row":74,"column":1},"action":"remove","lines":["  var newheight = (Math.floor(Math.random() * 100) + 100) + \"px\";","","$(\".line\").css(\"height\", newheight);","  ","  ","for (var increment = 0; increment < 100; increment++) {","  $(\"body\").append(\"<div class='dot'></div>\"); ","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":1},"end":{"row":48,"column":2},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":48,"column":0},"end":{"row":48,"column":1},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":47,"column":2},"end":{"row":48,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":2},"end":{"row":43,"column":2},"action":"remove","lines":["","  "]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":1},"end":{"row":42,"column":2},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":0},"end":{"row":42,"column":1},"action":"remove","lines":[" "]}]}],[{"group":"doc","deltas":[{"start":{"row":41,"column":0},"end":{"row":42,"column":0},"action":"remove","lines":["",""]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":0},"end":{"row":44,"column":1},"action":"remove","lines":["for (var increment = 0; increment < 100; increment++) {","  $(\"body\").append(\"<div class='photo-holder'></div>\"); ","}"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":0},"end":{"row":42,"column":87},"action":"insert","lines":["(\".cat-holder\").html('<img src=\"' + cats[Math.floor(Math.random()*cats.length)]+ '\">');"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":3},"end":{"row":42,"column":6},"action":"remove","lines":["cat"]},{"start":{"row":42,"column":3},"end":{"row":42,"column":4},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":4},"end":{"row":42,"column":5},"action":"insert","lines":["m"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":5},"end":{"row":42,"column":6},"action":"insert","lines":["a"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":6},"end":{"row":42,"column":7},"action":"insert","lines":["g"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":7},"end":{"row":42,"column":8},"action":"insert","lines":["e"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":3},"end":{"row":42,"column":8},"action":"remove","lines":["image"]},{"start":{"row":42,"column":3},"end":{"row":42,"column":4},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":4},"end":{"row":42,"column":5},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":5},"end":{"row":42,"column":6},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":6},"end":{"row":42,"column":7},"action":"insert","lines":["s"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":4},"end":{"row":42,"column":7},"action":"remove","lines":["ics"]},{"start":{"row":42,"column":4},"end":{"row":42,"column":5},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":5},"end":{"row":42,"column":6},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":6},"end":{"row":42,"column":7},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":7},"end":{"row":42,"column":8},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":8},"end":{"row":42,"column":9},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":8},"end":{"row":42,"column":9},"action":"remove","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":38},"end":{"row":42,"column":41},"action":"remove","lines":["cat"]},{"start":{"row":42,"column":38},"end":{"row":42,"column":39},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":39},"end":{"row":42,"column":40},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":40},"end":{"row":42,"column":41},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":69},"end":{"row":42,"column":71},"action":"remove","lines":["at"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":68},"end":{"row":42,"column":69},"action":"remove","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":68},"end":{"row":42,"column":69},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":69},"end":{"row":42,"column":70},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":70},"end":{"row":42,"column":71},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":46,"column":0},"end":{"row":67,"column":3},"action":"remove","lines":["var selectedpoem = false;","","$(\".go-button\").click(function() {","  ","  var nextpoem = poems[Math.floor(Math.random()*poems.length)];","  ","  while (selectedpoem == nextpoem) {","    nextpoem = poems[Math.floor(Math.random()*poems.length)];","  }","  ","  selectedpoem = nextpoem;","  ","  $(\".poem-holder\").html(nextpoem);","","  $(\".cat-holder\").html('<img src=\"' + cats[Math.floor(Math.random()*cats.length)]+ '\">');","  ","","","","  ","  ","});"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":0},"end":{"row":42,"column":89},"action":"remove","lines":["(\".photo-holder\").html('<img src=\"' + pics[Math.floor(Math.random()*pics.length)]+ '\">');"]},{"start":{"row":42,"column":0},"end":{"row":42,"column":88},"action":"insert","lines":["$(\".cat-holder\").html('<img src=\"' + cats[Math.floor(Math.random()*cats.length)]+ '\">');"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":4},"end":{"row":42,"column":7},"action":"remove","lines":["cat"]},{"start":{"row":42,"column":4},"end":{"row":42,"column":5},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":5},"end":{"row":42,"column":6},"action":"insert","lines":["h"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":6},"end":{"row":42,"column":7},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":7},"end":{"row":42,"column":8},"action":"insert","lines":["t"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":8},"end":{"row":42,"column":9},"action":"insert","lines":["o"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":39},"end":{"row":42,"column":42},"action":"remove","lines":["cat"]},{"start":{"row":42,"column":39},"end":{"row":42,"column":40},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":40},"end":{"row":42,"column":41},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":41},"end":{"row":42,"column":42},"action":"insert","lines":["c"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":69},"end":{"row":42,"column":72},"action":"remove","lines":["cat"]},{"start":{"row":42,"column":69},"end":{"row":42,"column":70},"action":"insert","lines":["p"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":70},"end":{"row":42,"column":71},"action":"insert","lines":["i"]}]}],[{"group":"doc","deltas":[{"start":{"row":42,"column":71},"end":{"row":42,"column":72},"action":"insert","lines":["c"]}]}]]},"ace":{"folds":[],"scrolltop":166,"scrollleft":0,"selection":{"start":{"row":38,"column":24},"end":{"row":38,"column":24},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":2,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1429768253720,"hash":"8bbf613d2a0b2d47ea8f49304f99474f3bcda8ce"}