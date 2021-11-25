function win() {
	var v = new THREE.Vector3(0,0,0);
	v.add(end.min);
	v.add(end.max);
	v.divideScalar(2);
	controls.getObject().position.set(v.x, v.y, v.z);
	setTimeout(win, 0);
}
win();
