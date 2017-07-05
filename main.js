// Answer the following questions in this file using comments without running the code

// 1.
// What does `givenName` equal right now?
let givenName;
// A: givenName does not hold a value. It is undefined.

// 2. What is `givenName` set to right now?
givenName = "Tim";
// A: givenName is set to the string "Tim".


// 3.
// What is `givenName` set to right now?
givenName = givenName;
// A: givenName is set to itself as most recently declared (if we were to consider #2 and #3 in the same document givenName would be the string "Tim")


// 4.
// What is `greeting` set to?
let greeting = "Hello, how are you? " + givenName;
// A: greeting is set to the string "Hello, how are you? {value of givenName}"


// 5.
// What is `math` set to?
let high = 50;
let low  = 10;
let math = high - low;
// A: math is set to the difference between high and low. The output if logged in the console would be 40.


// 6.
// What is `math` set to?
math = high - "5";
// A: math is set to the variable high {the value of which is 50 in the previous example} minus the string 5, which in the console converts to a number and outputs 45 if logged in the console.


// 7.
// Create a variable to calculate Tim's age
// The answer should read "Tim is 33 years old"
// The answer shoud not be written in a comment.
let born = 1984;
let today = 2017;
let ageOfTim = today - born;
console.log("Tim is " + ageOfTim + " years old");
// A:


// 8.
// Adjust this code. Store some information in the following variables.
// A:
let yourName = "Leonard Horne";
let instructorName = "Russell Osbourne";


// 9.
// Update the variables `yourName` and `instructorName` so the expression below reads correctly.
// A:



// This statement should read correctly
let statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;


// 10.
// We've created a variable named after each primitive type.
// Use the `=` operator to assign a value to each variable matching the type in the name.
let myNumber = 3;
let myString = "String.";
let myBoolean = false;
// This one's a little tricky - think carefully about what makes a value "undefined"!
let myUndefined = undefined;
// A:


// For questions 11 - 19: List which boolean value will be stored in each variable. (Remember: `==` does not check data type)

// 11.
// let x = (false == 0);
// A. true

// 12.
let y = (false == "");
// A. true


// 13.
let z = (0 == "");
// A. true


// 14.
let a = (null == null);
// A. true


// 25.
let b = (undefined == undefined);
// A. true


// 16.
let c = (undefined == null);
// A. true


// 17.
let d = (null == false);
// A. true


// 18.
let e = (NaN == null);
// A. false


// 19.
let f = (NaN == NaN);
// A. true


// 20.
// Fix the `if...else` statement below by adding an `if` keyword and conditional expression.
// Use the variable `thirsty` as part of your conditional expression.
// A:
let thirsty = true;

if (thirsty === false)
{
  console.log("I'm parched!");
} else {
  console.log("I've had enough to drink.");
}

// For questions 21 - 29 list which statement will be logged.

// 21.
let x;

if(x){
	console.log("True!");
} else {
	console.log("False!");
}
// A: False! x is undefined (falsey).


// 22.
if(""){
	console.log("True!");
} else {
	console.log("False!");
}
// A: False! Empty strings are falsey.


// 23.
// this expression will set x to NaN
// let x = 1 * undefined;

if(x){
	console.log("True!");
} else {
	console.log("False!");
}
// A: False! x is undefined (falsey).


// 24.
if(false){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True! false is a valid Boolean value and thus truthy.


// 25.
if(-5 && 5){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True! All numbers that aren't zero are truthy.


// 26.
if("Hello World!"){
	console.log("True!");
} else {
	console.log("False!");
}
// A: "Hello World!" is a valid string and is thus truthy.


// 27.
if({}){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True! {} -- > curly braces are a valid blank object. blank objects don't evaluate to false.


// 28.
if({name: "Yehuda Katz"}){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True! this is valid syntax for an object - {property: value;}


// 29.
if(new Date()){
	console.log("True!");
} else {
	console.log("False!");
}
// A: True! new Date() is valid syntax for the date object.


// 30.
// Link this file to the sibling `index.html` document, open the file in your browser and make sure there are no errors in your console.
