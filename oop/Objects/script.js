/*Public*/
// In the constructor 
// This technique is usually used to initialize public instance variables. 
// The constructor's this variable is used to add members to the object.
function Container(param) {
    this.member = param;
}
// construct a new object
var myContainer = new Container('abc');

console.log(myContainer.member);

// In the prototype
// This technique is usually used to add public methods.
// When a member is sought and it isn't found in the object itself, then it is taken from the object's constructor's prototype member.
// The prototype mechanism is used for inheritance.
//  To add a method to all objects made by a constructor, add a function to the constructor's prototype

Container.prototype.stamp = function (string) {
    return this.member + string;
}

myContainer.stamp('def');
console.log(myContainer.stamp('def'));