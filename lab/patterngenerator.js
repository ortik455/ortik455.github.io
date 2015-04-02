console.log("smiley face pattern");

for (var multiplier = 1; multiplier < 10; multiplier++) {
	console.log (multiplier*10);

	var smiley = "☻";
	
	for (var a = 0; a < 5; a++) {
			smiley = smiley + "☻☺☻";
			console.log(smiley);
	}
}
