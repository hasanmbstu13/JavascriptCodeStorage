// Modifying DOM attributes and contents
// Selecting html elements
var myNode = document.querySelector('.artistlist img');
// Accessing html elements attributes
console.log(myNode.src);
// Changing html attributes
myNode.src = 'images/artists/Xhou_Ta_tn.jpg';
// We also add an attribute to the elements
myNode.id = "selected";
// Reserved word of js is not working
// Like we cann't use word class
// myNode.class = "myClass";
// Instead we use myclass
myNode.className = "myClass"; 
console.log(myNode);