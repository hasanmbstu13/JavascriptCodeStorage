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

// We can also select elements uing CSS slectors
var myNode = document.querySelectorAll('.article');
console.log(myNode);
// We can also type selector to an element
myNode = document.querySelectorAll('input[type=radio]');
console.log(myNode);
// We can also select a descendant
var myNode = document.querySelectorAll('#artistlist li');
console.log(myNode);
// We can also select child like image
var myNode = document.querySelectorAll('#artistlist li>img');
console.log(myNode);
// We can also select muliple elements in the same list
var myNode = document.querySelectorAll('#artistlist li>img','#comingtoevent img');
console.log(myNode);

/* Selecting form elements */
// Return all of the forms that are present in the document in a array
console.log(document.forms);
// This will return first form
console.log(document.forms[0]);
// Since form has a name we can select the form using name
console.log(document.register);
// We can select the element of the form by sing name attribute
console.log(document.register.myname);
// We can change the value of the form fileds with the value attribute
console.log(document.register.myname.value='Mainul Hasan');
// There is a possibility two or more elements have the same name in the case we use special methods called getElementsByName and then use array index
console.log(document.getElementsByName('subscribe')[0]);
// Set the checked using checked attribute
console.log(document.getElementsByName('subscribe')[1].checked = "checked");

