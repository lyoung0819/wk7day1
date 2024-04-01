// console.log('Hello from main.js')

// Declaring variables
var firstName;

console.log(firstName);

firstName = 'George';

console.log(firstName);

var lastName = 'Bush';

console.log(lastName);


// Redeclare the lastName variable
var lastName;
console.log(lastName);

var lastName = 'Clinton';
console.log(firstName, lastName);

// While possible, do not declare variables without keyword like 'var' 
message = 'Do not do this!!!!'
console.log(message)


// Statement Termination 

// On one line:
console.log(firstName); console.log(lastName);

// On multi lines, semi colons are option
console.log(firstName)
console.log(firstName)

// Clear the console
console.clear()


//  ---------------
//  >> STRINGS << 
//  ---------------


// Similar to python, they can use single or double quotes (no triple quotes tho)

var myString1 = 'This is a string';
var myString2 = 'This is also a string';
var myString3 = "John's string with an apostrophe";
//  OR 
var myString4 = 'John\'s string with an apostrophe';
var myString5 = 'My "string" in quotes';
var myString6 = "my \"string\" in quotes"

console.log(myString1);
console.log(myString2);
console.log(myString3);
console.log(myString4);
console.log(myString5);
console.log(myString6);


// String Concatenation
var fullName = firstName + ' ' +lastName;
console.log(fullName);

// Access characters in a string
// Works similar to python, except it does not allow for negative indices (this will give you an 'undefined' message)
console.log(fullName[0]);
console.log(fullName[7]);


// >> STRING METHODS << 
//  ---------------


// .toUpperCase method - returns a NEW string will all chars uppercase
console.log(fullName);
console.log(fullName.toUpperCase())

// .toLowerCase method - returns a NEW string will all chars lowercase
console.log(fullName);
console.log(fullName);
console.log(fullName.toLowerCase())

// title case is not built it, must write it yourself(below)
function titleCase(str) {
    var words = str.toLowerCase().split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1); 
    }
    return words.join(' ');
}

console.log(titleCase('plEAse tiTLE cAse tHis StrinG'))

// >> LENGTH: 

// Finding the length of a string
// .length property (nit a fuction like in python)
console.log(fullName.length)

// >> SLICE method
// you can start and stop at certain indeces, but no step function/backwards etc via slice 
// Syntax: 
// slice(indexStart)
// slice(indexStart, indexEnd)

var myString;
myString = 'Hello my name is Lexie and I am a student at CodingTemple!'

console.log(myString.slice(2, 17)); 

// if indexStart >= str.length -> ' ' (you get an empty string)

console.log(myString.slice(2, 52)); // slice from the 2 index up to but NOT including the 52 index 

console.log(myString.length)

console.log(myString.slice(15)); // this will start at the 15 index and will go through end of string 

console.log(myString.slice(-5)); // Negative nums start from the back 


// Negative indexes does NOT work with bracket notation, must use slice 
console.log(fullName[-2]) // this will give you an 'undefined'
console.log(fullName.slice(-3, -2));

console.clear();

// >> REPLACE 
// Syntax:  replace(pattern, replacement) replacement can be a lambda-like function
//  replacing SUBSTriNGS with the .replace methods 
console.log(fullName);

console.log(fullName.replace('George', 'Bill'));

console.log(fullName);

// save fullName.replace to a new variable to save it for later use
var new_name;
new_name = fullName.replace('George', 'Bill');
console.log(new_name);

// REGEX is built in!
console.log(fullName.replace(/[aeiou]/g, matchString => matchString.toUpperCase()));
// to use regex you put your / / around your RegEx, g is Global (saying continue to match through end of string, as opposed to stopping with the first time it is found), 

// the match function will allow you to apply a change to the matchobject

// >> TEMPLATE LITERALS 
// this is similar to the formatted string in python (where this is started with an f)
// JS uses back tics or tic marks `` to declare a string and tehn we can use ${variableName} 
// `` can be used like triple quoted strings in python 

var muliLineString = `This is a string
that is written
on multiple lines`;

console.log(muliLineString);

var funkMan = `The best funk musician of his time was ${fullName}`;
console.log(funkMan);


// We can have multiple variables in one string

var funkInfo = `The best funk musician of his time was ${lastName}, ${firstName}: ${fullName.toUpperCase()}`
console.log(funkInfo);

// --------------------------------------------------------------------------------------------------
//  >> IN CLASS EXERCISE 
//  Create 3 variables describing your best friend, then tell us about your best friend using a template string


var trait1 = 'funny'
var trait2 = 'kind'
var trait3 = 'smart'

var bestfriend = `My best friend is ${trait1}, ${trait2} and ${trait3}.`;
console.log(bestfriend);

console.log(`My best friend is ${trait1}, ${trait2} and ${trait3}.`);