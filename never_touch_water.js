function checkY() {
	var pos = controls.getObject().position;
	if (pos.y <= -10) {
		pos.y = 0;
	}
	setTimeout(checkY, 0);
}
checkY();
