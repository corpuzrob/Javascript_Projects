function addition_Function() {
    let x = 3, y = 4;
    var addition = x + y;
    document.getElementById("math1").innerHTML = "x plus y equals " + addition;
}

function subtraction_Function() {
    var subtraction = 9 - 5;
    document.getElementById("math2").innerHTML = "9 minus 5 equals " + subtraction;
}

function multiplication()   {
    var multiply = 6 * 7;
    document.getElementById("math3").innerHTML = "6 times 7 equals " + multiply;
}

function division() {
    var divide = 45 / 5;
    document.getElementById("math4").innerHTML = "45 divided by 5 equals " + divide;
}

function more_Math()    {
    var simple_Math = (2 + 2) * 12 / 2 - 7;
    document.getElementById("math5").innerHTML = "2 plus 2, multiplied by 12, divided by 2, and then subtracted by 7 equals " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 42 % 9;
    document.getElementById("math6").innerHTML = "When you divide 42 by 9 you have a remainder of " + simple_Math;
}

function negation_Operator()    {
    var z = 15;
    document.getElementById("math7").innerHTML = "This negation operator returns the opposite/negative form of z, which is " + -z;
}

function increment_Operator()   {
    var i = 5;
    i++;
    document.getElementById("math8").innerHTML = "The increment of 5 is " + i;
}

function decrement_Operator()   {
    var d = 7.75;
    d--;
    document.getElementById("math9").innerHTML = "The decrement of 7.75 is " + d;
}

window.alert(math10.random());