//your JS code here. If required.
function getScreenSize() {
	let width = window.innerWidth;
	let height = window.innerHeight;
	document.getElementById("sizeInfo").innerText = `Width: ${width} and Height: ${height}`
}

window.addEventListener("resize", getScreenSize);