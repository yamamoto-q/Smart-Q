if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
	console.log(7);
	document.addEventListener("deviceready", onDeviceReady, false);
} else {
	console.log(10);
	onDeviceReady();
}

function onDeviceReady() {
	console.log("onDeviceReady");
}