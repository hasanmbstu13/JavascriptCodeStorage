// document.body element returns the <body> element
// document.documentElement returns the <html> element
// clientHeight can be calculated as CSS height + CSS padding 
// - height of horizontal scrollbar (if present).
// The clientHeight property returns the viewable height of an element in pixels, 
// including padding, but not the border, scrollbar or margin.
function adjustStyle() {
	var width = 0;
	// get the width.. more cross-browser issues
	if (window.innerHeight) {
		width = window.innerWidth;
	} else if (document.documentElement && document.documentElement.clientHeight) {
		width = document.documentElement.clientWidth;
	} else if (document.body) {
		width = document.body.clientWidth;
	}
	// now we should have it
	if (width < 600) {
		document.getElementById("myCSS").setAttribute("href", "_css/narrow.css");
	} else {
		document.getElementById("myCSS").setAttribute("href", "_css/main.css");
	}
}

// now call it when the window is resized.
window.onresize = function() {
	adjustStyle();
}

window.onload = function() {
	adjustStyle();
}