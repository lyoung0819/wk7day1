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
// --------------------------------------------------------------------------------------------------

console.clear()

// typeof Operator - used to determine the data type of a varialbe (not a funciton, does not need parantheses)

console.log(typeof 'Hello');
console.log(typeof fullName);



// --------------------------------------------------------------------------------------------------
// >> NUMBER DATA TYPE << 
// --------------------------------------------------------------------------------------------------

// Unlike many other languages, JS only has one numeric data type 
// strictly just put the number (no parathenses/etc )

var someInt = 123 
console.log(someInt);
console.log(typeof someInt);

var someFloat = 3.14;
console.log(someFloat);
console.log(typeof someFloat);


// --------------------------------------------------------------------------------------------------
// >> MATHEMATICAL CALCS
// --------------------------------------------------------------------------------------------------

//  >> ADDITION
//  use the + operator
var sum = 5 + 5;
console.log(sum);

sum += 5;  // sum = sum + 5
console.log(sum);

// JS provides the ++ which increments by 1
sum++; // sum + 1 // sum = sum + 1
console.log(sum);

// >> SUBTRACTION
//  use the operator
var diff = 10 -5;
console.log(diff);

diff -= 2; // diff = diff -2
console.log(diff)

diff--; // diff -= 1 // diff = diff -1
console.log(diff);


// >> MULTIPLICATION (*), DIVISION(/), EXPONENTS(**) 
// are all the same as they are in python
var prod = 5 * 5
console.log(prod)

prod *= 5; // whatever prod currently is times 5
console.log(prod); 

var quotient = 88/22;
console.log(quotient);

quotient /= 8;
console.log(quotient);

var square = 5**2;
console.log(square);
square **= 2;
console.log(square);


// >> MODULO 
// JS also has the modulo that finds the remainder  - use the % operator
var mod = 37 % 8;
console.log(mod);
mod %= 2;
console.log(mod);

// >> FLOOR DIVISION (floor, full whole number rounded down)
// use the build in Math object's floor method 
var floor = Math.floor(5/2);
console.log(floor);
// also a CIELING!
var ceil = Math.ceil(5/2);
console.log(ceil);


console.clear()

// >> PREFIX and POSTFIX ++  
// ++ will add 1 to whatever the current value is, and the placement matters 

var prefixPlus = 1;
console.log(++prefixPlus); // 2
console.log(prefixPlus); // 2

var postfixPlus = 1;
console.log(postfixPlus++); // 1
console.log(postfixPlus); // 2

// Postfix
console.log('Start');
var i = 0;

while (i < 10){
    console.log(i++)
}
console.log('End');

// Prefix
console.log('Start');
var j = 0;

while (j < 10){
    console.log(++j)
}
console.log('End');


console.clear()
// --------------------------------------------------------------------------------------------------
// >> TYPE CONVERSION IN JS 
// --------------------------------------------------------------------------------------------------

// JS and the + Operator 
// In python, you can't use + to concat/add different data types (like a str to int)
var myNum = 123;
var myOtherNum = '456';

var added = myNum + myOtherNum;
console.log(added);
console.log(typeof added)
// This implicitly converts the numbers into a string 

// similar to the int() and str() functions in Python, JS has
// parseInt(), parseFloat(), Number(), Number.toString() 

var num1 = '47'
console.log(num1);
console.log(typeof num1);

var num1A = parseInt(num1);
console.log(typeof num1A);

// parseInt on a decimal will round down to a whole number, use parseFloat if you want the full number
var num2 = '987.65';
console.log(num2);
console.log(typeof num2);

var num2A = parseInt(num2);
console.log(num2A);
console.log(typeof num2A); 
var num2B = parseFloat(num2)
console.log(num2B);

//  Can also use the Number() constuctor function
var num3 = '4983';

var num3A = Number(num3);
console.log(num3A);
console.log(typeof num3A); 

// passing in something that cannot convert to a number results in NaN 'Not a Number'
var notANum = 'this is not a number'
var notANumA = Number(notANum);
console.log(notANumA);


//  To convert a number to a string == Number.toString()
var anotherNumber = 734;
console.log(typeof anotherNumber)

var stringNumber = anotherNumber.toString()
console.log(stringNumber);
console.log(typeof stringNumber);


// JavaScript will try to implicity convert your types
var guessThis1 = '10'
var guessThis2 = '9';

var quiz1 = guessThis1 + guessThis2;
// A) 19 
// B) 109 !!! 
// C) NaN 
// D) undefined 
console.log(quiz1) // 109 

var quiz2 = guessThis1 - guessThis2;
console.log(quiz2) // 1 (it subtracted the numbers)


var quiz3 = 10 > '9'
console.log(quiz3) // 'true' because it converts 9 to a number 

var quiz4 = '10' > '9'
console.log(quiz4); // 'false' 
// both values are already strings, so it does not need to convert types
// strings compare alphabetically > the string 10 does not come before the string 9 in alphabetical order (UNICODE values)


var quiz5 = 'S' > '9'
console.log(quiz5)

var quiz5 = 'S' > '9'
console.log(quiz5)



console.clear()
// --------------------------------------------------------------------------------------------------
// >> BOOLEANS
// --------------------------------------------------------------------------------------------------

// In JS, booleans are true and false (in python, it is True and False)

var myBool1 = true;
console.log(myBool1);
console.log(typeof myBool1);

var myBool2 = false;
console.log(myBool2);
console.log(typeof myBool2);

// >> BOOLEAN OPERATORS (or comparison operators)
//  mostly the same as Python

// >, <, >=, <=, !=or <> 

console.log(1 < 2); // true
console.log(1 > 2); // false
console.log(10 >= 10); // true
console.log(10 <= 5); // false
console.log(1 != 2); // true
console.log(1 == 2); // false

// JS has something called Strict Equality 
// with loose equality (==), JS can implicitly convert and can check values as the same
// with strict equality (===), JS ensures both type and value are the same

var numOne = 1;
var strOne = '1';

console.log(`loose quality:`, numOne == strOne); // true
console.log(`strict quality:`, numOne === strOne); // false 

// >> NEGATE BOOLEANS
//  In python, we have the 'Not' operator
//  in JS, we only have the '!' operator - it can precede any boolean value and switch its value 


console.log(`loose quality:`, numOne != strOne); // false 
console.log(`strict quality:`, numOne !== strOne); // true

console.log(true); // true
console.log(!true); // false


// --------------------------------------------------------------------------------------------------
// >> CONTROL FLOW / IF STATEMENTS
// --------------------------------------------------------------------------------------------------
// aka... our conditional statements! 

// in python, everything is about the indentation 

// SYNTAX:
// if(condition){code to run if true}

var age = 88

if (age > 18) {
    console.log('You are eligible to vote.')
}

//  if/else 
// if (condition) {code to run if true} else {code to run if false}
var age2 = 34
if (age2 > 35) {
    console.log('You are old enough to run for president.')
} else {
    console.log('You are too young to run for president.')
}

// ELIF 
// SYNTAX: 
// if (condiiton) {code if true} else if (condition2){code if condition2 is true} else {code if all else is false}

age == 99;

if (age >= 65) {
    console.log('You are a senior citizen')
} else if (age >= 18){
    console.log('You are an adult')
} else {
    console.log('You are a child')
}; 

age2 == 17;
if (age2 >= 65) {
    console.log('You are a senior citizen')
} else if (age2 >= 18) {
    console.log('You are an adult')
} else {
    console.log('You are a child')
};


// >> WHILE LOOPS 
// while(condition){code to run each loop until condition is false}

var myRandomNumber = Math.floor(Math.random() * 10)
console.log('Starting random number;', myRandomNumber);

while(myRandomNumber !== 5){
    console.log(myRandomNumber)
    myRandomNumber = Math.floor(Math.random() * 10)
}

console.log('Ending random number:', myRandomNumber);
