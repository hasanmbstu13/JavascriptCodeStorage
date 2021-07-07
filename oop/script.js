// Function Constructor
/* 
var Person = function (name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}

Person.prototype.calculateAge = function() {
	console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var mainul = new Person('mainul', 1990, 'developer');
var hasan = new Person('hasan', 1969, 'designer');
var nabhan = new Person('nabhan', 1948, 'retired');

mainul.calculateAge();
hasan.calculateAge();
nabhan.calculateAge();

console.log(mainul.lastName);
console.log(hasan.lastName);
console.log(nabhan.lastName);
*/ 



// Object.create
var personProto = {
	calculateAge: function() {
		console.log(2016 - this.yearOfBirth);
	}
};

var mainul = Object.create(personProto);
mainul.name = 'Mainul';
mainul.yearOfBirth = 1990;
mainul.job = 'developer';

var hasan = Object.create(personProto, {
	name: { value: 'hasan' },
	yearOfBirth: { value: 1969 },
	job: { value: 'designer' }
});


// Objects
var obj1 = {
	name: 'Mainul',
	age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
	name: 'Mainul',
	city: 'Dhaka'
};

function change(a, b) {
	a = 30;
	b.city = 'Noakhali';
}

change(age, obj);

console.log(age);
console.log(obj.city);