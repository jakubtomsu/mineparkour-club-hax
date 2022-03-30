let myname = document.getElementById('nickname').value;

function removePlayers() {
	if (leaderboardVisual.objects.length <= 1) {
		setTimeout(removePlayers, 0);
		return;
	}

	let filtered = leaderboardVisual.objects.filter(function(value, index, arr) {
		if (index == 0) return true;
		if (((index - 1) % 2) == 0) {
			return value.text == myname;
		} else {
			return arr[index - 1].text == myname;
		}
	});

	for (let i = 0; i < filtered.length; i++) {
		filtered[i].position = leaderboardVisual.objects[i].position;
	}
	

	leaderboardVisual.objects = filtered;
	setTimeout(removePlayers, 0);
}
removePlayers();
