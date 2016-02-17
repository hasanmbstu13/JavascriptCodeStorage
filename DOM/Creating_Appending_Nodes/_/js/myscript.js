/*Crating & Appending Nodes*/
var myElement = document.createElement('img');
// console.log(myElement);
// Set an attribute with our created element by using dot notation 
// here add source attribute with the element
myElement.src = 'images/artists/Ahmed_Deedat_tn.jpg';
// Add alt tag
myElement.alt = 'Photo of Ahmed Deedat';
// Add non-standard attribute like data-task
myElement.setAttribute('data-task', 'speaker');
// So our element is ready but still we don't see it in our screen
// because its in memory without appending it in our document we can't see it in our page
var myNode = document.querySelectorAll('.artistlist ul li');
// now we append the element with in our desired location
myNode[6].appendChild(myElement);
console.log(myNode[6]);
// console.dir(myNode);
// console.log(myElement);