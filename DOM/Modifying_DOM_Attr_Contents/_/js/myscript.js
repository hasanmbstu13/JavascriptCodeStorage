// Modifying DOM attributes and contents
// Selecting html elements
// var myNode = document.querySelector('.artistlist img');
// Accessing html elements attributes
// console.log(myNode.src);
// Changing html attributes
// myNode.src = 'images/artists/Xhou_Ta_tn.jpg';
// We also add an attribute to the elements
// myNode.id = "selected";
// Reserved word of js is not working
// Like we cann't use word class
// myNode.class = "myClass";
// Instead we use myclass
// myNode.className = "myClass"; 
// console.log(myNode);
// Select a label

/*Controlling classes with HTML5 classList*/
var myNode = document.querySelector('.artistlist img');
console.log(myNode);
// Add a class with the element
myNode.classList.add('faded');
console.log(myNode);
// Add another class
myNode.classList.add('pulse');
console.log(myNode);
// Remove the class use remove
myNode.classList.remove('pulse');
console.log(myNode);
// Toggle first time return true and second time false
// myNode.classList.toggle('hidden');
// console.log(myNode);

/*Detecting data attributes*/
var myNode = document.querySelectorAll("#featuredartists img");
console.log(myNode);
console.log(myNode[1]); 
console.log(myNode[1].dataset.task);
myNode[1].dataset.task = "presenter";
console.log(myNode[1].dataset.task);

/*Targeting the attributes property*/
var myNode = document.querySelector('#featuredartists img');
console.log(myNode);
// Get them all attributes of targeted element by attributes tag
// myNode.attributes;
console.log(myNode.attributes);
// Accessing attributes by numeric index
console.log(myNode.attributes[0]);
// Accessing attributes by named index
console.log(myNode.attributes['src']);
// Accessing attributes by using dot notation
console.log(myNode.attributes.src);

/*Using text content modifiers*/
var myNode = document.querySelector('#abouttheevent');
console.log(myNode);
// Return all of the html inside the node not including the tag
console.log(myNode.innerHTML);
// Return all of the html inside the node with including the tag
console.log(myNode.outerHTML);
// Append the element after the element itself
myNode.insertAdjacentHTML('afterend','<p>This is another paragraph</p>');
// Append the element before the element itself
myNode.insertAdjacentHTML('beforebegin','<p>This is another paragraph</p>');
// Append the element before the first child of the element
myNode.insertAdjacentHTML('beforebegin','<p>This is another paragraph man</p>');
// Append the element before the last child of the element or node
myNode.insertAdjacentHTML('beforeend','<p>This is another paragraph man</p>');

/*Using text content modifiers*/
var myNode = document.querySelector('#abouttheevent');
console.log(myNode);
// See the directory version of the node
console.dir(myNode);
// See the text content of a node
console.log(myNode.textContent);
myNode.textContent = 'The quick brown fox';
console.log(myNode);

/*Working with restricted attributes*/
var myLabel = document.querySelector('label');
console.log(myLabel);
// Change the for value
myLabel.htmlFor = 'companyName';
console.log(myLabel);
var myNode = document.querySelector("input[type='radio']");
console.log(myNode);
// Unselect the radio button
myNode.checked = 0;
console.log(myNode);
// Select the first element inside the register form element
var myNode = document.querySelector("#register label");
console.log(myNode);
// get the for attribute value
console.log(myNode.htmlFor);
// Instead of using wired name htmlFor we can use getAttribute
console.log(myNode.getAttribute('for'));
// Set the for attribute value
myNode.setAttribute('for','somethingelse');
// var setForAttribute = myNode.setAttribute('for','somethingelse');
console.log(myNode);
// console.log(setForAttribute);
// Check whether an element has attribute
console.log(myNode.hasAttribute('id'));
console.log(myNode.hasAttribute('for'));
// Removing an attribute
myNode.removeAttribute('for');
console.log(myNode);





