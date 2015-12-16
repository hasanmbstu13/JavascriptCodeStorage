// Traditional Approach
function plus(a,b){
	return a+b;
}
plus(2,4);

// // Definition Expression
var plus = function(a,b){
	return console.log(a+b);
}(2,3);


function plus(a,b){
	// return a series of things 
	// here return is method
	// return method is a function
	return(
		console.log(a+b),
		console.log(this),
		console.log(arguments)
		) 
}
// plus(2,4);

// Invoking functions as methods
var calc = {
	status: 'Awesome',
	plus: function(a,b){
		return(
			 console.log(this),
			 console.log(a+b),
			 console.log(arguments),
			 console.log(this.status)
			)
	}

}
calc.plus(2,2);

// Constructor
// Constructor names should be capitialized
// This is something special tells the developer that this is special
var Dog = function() {
	var name, breed;
	return console.dir(this);
}

firstDog = new Dog;
firstDog.name = "Rover";
firstDog.breed = "Doberman";

secondDog = new Dog;
secondDog.name = "Fluffy";
secondDog.breed = "Poodle";

console.log(firstDog.name);
console.log(secondDog.name);

// Expanding objects through prototype 
// Prototypal Inheritance
// speak function will used by different animal 
var speak = function(saywhat){
	console.log(saywhat);
}
var Dog = function() {
	var name, breed;
}

var Cat = function() {
	var name, breed;
}

// Link between speak and Dog 
// by expanding dog by accesing its prototype
// i.e means setting speak method in my dog object 
// which is same as my speak function
Dog.prototype.speak = speak;
// // Multiple objects can inherit the same functionality
Cat.prototype.speak = speak;

// // Use the parenthesis after object optional
// firstDog = new Dog();
firstDog = new Dog;
firstDog.name = "Rover";
firstDog.breed = "Doberman";
firstDog.speak('woof');

firstCat = new Cat;
firstCat.name = "Sniggles";
firstCat.breed = "Manx";
firstCat.speak('meow');

// Implementation of function in JS
// Regardless of different implementation
// the output of the function is same
function add(a,b){
	console.log(a+b);
	return a+b;
}
document.writeln("The output of traditional function approach: "+add(2,3)+"<br>");

var add = function(a,b){
	console.log(a+b);
	return a+b;
}
document.writeln("The output of definition expression approach: "+add(2,4)+"<br>");

// Call & Apply
var speak = function(what,how){
	// console.log(what);
	// Here this will refer global object
	// here this will get the object saySomething
	console.log(this);
	console.log(this.love);
	console.log(this.normal);
	console.log(what);
	console.log(how);
	// console.log(what.lastChild);
	// console.log(what['1']);
	// Instead of calling this to the global object
	// It's more better to this is bind with the object
	// or some property of the object
	// call method bind the this with object properties 
	// or methods instead of global object
	// console.log(this.love);
	// console.log(this.normal);
}

// call the function speak()
// speak("moof");
// animalSpeak = new speak;

var saySomething = {normal:"meow", love: "purr"}
// here saySomething is passing to the this parameter
speak.call(saySomething);
// here passing value both for this and parameter what
// here saySomething for this and saySomething.normal for what
speak.call(saySomething,saySomething.normal);
// speak.call(saySomething, saySomething.normal);
// speak.call(saySomething.normal);
// Apply will passing the array
// speak.apply(saySomething,['meouff','ouch']);


// Arguments parameter Object
// This type of object is useful if we pass unknown number of argumetns
var plus = function() {
	var sum = 0;
	for (var i = arguments.length - 1; i >= 0; i--) {
		sum += arguments[i];
	}
	return sum;
}

console.log(plus(2,2,3,7,6,7));