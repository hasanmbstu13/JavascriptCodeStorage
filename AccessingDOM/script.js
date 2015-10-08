var mainTitle = document.getElementById("mainTitle");

// programmatically reach in the html page
console.log("This is an element of type: ", mainTitle.nodeType ); // return node type here is 1
console.log("the inner HTML is ", mainTitle.innerHTML );			// return innerhtml here is welcome to california
console.log("Child nodes: ", mainTitle.childNodes.length);			// retrun the number of child

var myLinks = document.getElementsByTagName("a");
console.log("Links: ", myLinks.length);