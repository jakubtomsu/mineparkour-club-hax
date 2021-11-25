function win() {
	var pos = controls.getObject().position;
	if (pos.y <= -10) {
		var v = new THREE.Vector3(0,0,0);
		v.add(end.min);
		v.add(end.max);
		v.divideScalar(2);
		pos.set(v.x, v.y, v.z);
	}
	setTimeout(win, 0);
}
