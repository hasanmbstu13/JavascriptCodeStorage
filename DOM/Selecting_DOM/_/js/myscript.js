// To select an element using ID
// To directly select the item using console bar
document.getElementById('comingtoevent');
// To select the item from the script and show the result in console bar
console.log(document.getElementById('comingtoevent'));

// To assign a node in variable 
var myNode = document.getElementById('comingtoevent');
console.log(myNode);
// To see all of the properties and methods of the myNode node
console.dir(myNode);

// Select the first Child
console.log(myNode.firstChild);

// Select the childNodes
console.log(myNode.childNodes);

// To select an element using Tag Name
console.log(document.getElementsByTagName('li'));

// Combine ID and Tag to select an specific item
var my_node = document.getElementById('featuredartists').getElementsByTagName('li');
console.log(my_node);
// Short form to select the 3rd li from the array
console.log(my_node[2]);

// Longer form to select the 4th li from the array
var myNode = document.getElementById('featuredartists').getElementsByTagName('li')[3];
console.log(myNode);

// Another way to access the selected item first child
console.log(my_node[2].firstChild);


/* Pick element by Class Name */
var myNode = document.getElementsByClassName('group');
console.log(myNode);

// To select an specific class elements combining ID and Class
var myNode = document.getElementById('featuredartists').getElementsByClassName('group');
console.log(myNode);

/* Isolating elements by querySelector() */
// This will return the first article
var singleSelector = document.querySelector('article');
console.log(singleSelector);
console.log(singleSelector.childNodes);

// If we want to return the all matched elment of article then we use querySelectorAll()
var myNode = document.querySelectorAll('article');
console.log(myNode);
console.log(myNode[2].childNodes);