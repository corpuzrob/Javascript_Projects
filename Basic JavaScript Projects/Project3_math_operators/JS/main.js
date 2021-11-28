// This function returns two variables added together
function addition_Function() {
    let x = 3, y = 4;
    var addition = x + y;
    document.getElementById("math1").innerHTML = "x plus y equals " + addition;
}

// Subtraction function
function subtraction_Function() {
    var subtraction = 9 - 5;
    document.getElementById("math2").innerHTML = "9 minus 5 equals " + subtraction;
}

// Multiplication function
function multiplication()   {
    var multiply = 6 * 7;
    document.getElementById("math3").innerHTML = "6 times 7 equals " + multiply;
}

// Division function
function division() {
    var divide = 45 / 5;
    document.getElementById("math4").innerHTML = "45 divided by 5 equals " + divide;
}

// Combination of math operators
function more_Math()    {
    var simple_Math = (2 + 2) * 12 / 2 - 7;
    document.getElementById("math5").innerHTML = "2 plus 2, multiplied by 12, divided by 2, and then subtracted by 7 equals " + simple_Math;
}

// This returns the modulus/remainder of a number divided by another
function modulus_Operator() {
    var simple_Math = 42 % 9;
    document.getElementById("math6").innerHTML = "When you divide 42 by 9 you have a remainder of " + simple_Math;
}

// The negation operator returns the opposite/negative of a number
function negation_Operator()    {
    var z = 15;
    document.getElementById("math7").innerHTML = "This negation operator returns the opposite/negative form of z, which is " + -z;
}

// This adds 1 to a number
function increment_Operator()   {
    var i = 5;
    i++;
    document.getElementById("math8").innerHTML = "The increment of 5 is " + i;
}

// This subtracts 1 from a number
function decrement_Operator()   {
    var d = 7.75;
    d--;
    document.getElementById("math9").innerHTML = "The decrement of 7.75 is " + d;
}
// Creates a pop-up window displaying a random number between 0 and 1
window.alert("Here's a random number between 0 and 1: " + Math.random());

// Creates a pop-up window displaying a random number between 0 and 100
window.alert("Here's a random number between 0 and 100: " + Math.random() * 100);

// This is a function that rounds pi to the nearest integer
function rounded_PI() {
    var roundPI = (Math.round(Math.PI));
    document.getElementById("math10").innerHTML = "Pi rounded to the nearest integer is: " + roundPI;
}

// This is a function that returns the square root of a variable
function square_Root() {
    let c = 64;
    var squareRoot = (Math.sqrt(c));
    document.getElementById("math11").innerHTML = "The square root of c is " + squareRoot;
}

// Below are a couple of other things I tried:

// This displays a window alert with pi:
// window.alert("This is an approximate value of pi: " + Math.PI);

// This is a window alert displaying pi rounded down: 
// window.alert(Math.round(3.23));

// Not sure why this doesn't work:
// window.alert("This is the square root of 64: " + Math.SQRT64);

