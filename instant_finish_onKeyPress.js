//press 'g' to teleport to end
document.addEventListener("keydown", function(e) {
	if (e.key != "g") { return; }
	var v = new THREE.Vector3(0,0,0);
	v.add(end.min);
	v.add(end.max);
	v.divideScalar(2);
	controls.getObject().position.set(v.x, v.y, v.z);
});
