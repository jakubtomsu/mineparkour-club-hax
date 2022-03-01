//press q to increase speed by 50
document.addEventListener("keydown", function(e) {
	if (e.key != "q") { return; }
	speed += 50
});
//press e to decrease speed by 50
document.addEventListener("keydown", function(e) {
	if (e.key != "e") { return; }
	speed -= 50
});
