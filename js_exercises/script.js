// Tip calculator object
var john = {
	fullName: 'John Smith',
	bills: [124, 48, 268, 180, 42],
	calcTips: function () {
		this.tips = [];
		this.finalValues = [];

		for (var start = 0; start < this.bills.length; start++) {
			// Determine percentage based on tipping rules
			var percentage;
			var bill = this.bills[start];

			if (bill < 50) {
				percentage = .2;
			} else if (bill >= 50 && bill < 200) {
				percentage = .15;
			} else {
				percentage = .1;
			}

			// Add results to the corresponding arrays
			this.tips[start] = bill * percentage;
			this.finalValues[start] = bill + bill * percentage;


		}
	}
}

var mark = {
	fullName: 'Mark Miller',
	bills: [77, 475, 110, 45],
	calcTips: function () {
		this.tips = [];
		this.finalValues = [];

		for (var start = 0; start < this.bills.length; start++) {
			// Determine percentage based on tipping rules
			var percentage;
			var bill = this.bills[start];

			if (bill < 100) {
				percentage = .2;
			} else if (bill >= 100 && bill < 300) {
				percentage = .15;
			} else {
				percentage = .1;
			}

			// Add results to the corresponding arrays
			this.tips[start] = bill * percentage;
			this.finalValues[start] = bill + bill * percentage;


		}
	}
}

function calcAverage(tips) {
	var sum = 0;
	for(var i = 0; i < tips.length; i++) {
		sum = sum + tips[i];
	}
	return sum / tips.length;
}


john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);


// This keyword in practice
var john = {
	name: 'John',
	yearOfBirth: 1990,
	calculateAge: function () {
		// this refers to the current object
		console.log(this);
		console.log(2016 - this.yearOfBirth);

		function innerFunction() {
			console.log(this);
		}
		// this refers to the window object
		innerFunction();
	}
}

john.calculateAge();


var mike = {
	name: 'Mike',
	yearOfBirth: 1984
};

// We don't use parenthesis here because using parenthesis when call the function but here assigning the method to the other object
// Method borrowing
mike.calculateAge = john.calculateAge;
// Calling method and method borrowing reasinging the value for self object
mike.calculateAge();