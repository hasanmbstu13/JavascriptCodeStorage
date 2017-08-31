// document.body element returns the <body> element
// document.documentElement returns the <html> element
// clientHeight can be calculated as CSS height + CSS padding 
// - height of horizontal scrollbar (if present).
// The clientHeight property returns the viewable height of an element in pixels, 
// including padding, but not the border, scrollbar or margin.
// innerHeight - Get the current computed inner height (including padding but not border) for the first element 
// in the set of matched elements or set the inner height of every matched element.
// innerWidth - Get the current computed inner width (including padding but not border) for the first element 
// in the set of matched elements or set the inner width of every matched element.
// onload is most often used within the <body> element to execute a script once 
// a web page has completely loaded all content (including images, script files, CSS files, etc.).
// The onresize event occurs when the browser window has been resized.
// Tip: To get the size of an element, 
// use the clientWidth, clientHeight, innerWidth, innerHeight, outerWidth, outerHeight, offsetWidth and/or offsetHeight properties.
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