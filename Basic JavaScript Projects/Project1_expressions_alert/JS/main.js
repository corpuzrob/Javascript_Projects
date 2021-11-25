// alert("Hello, World!");
window.alert("Hello, world!"); //Adds a pop up alert
document.write('Hello, world!'); //Prints a string

document.write("<br>"); //Adds a line break

var Y = "Still here, world!" //Sets a variable
document.write(Y); //prints the variable

document.write("...and then he said, \"No way!\" and I said, \"Way.\""); // Example of special characters
document.write("<br>"); //Adds a line break

document.write("I\'ll huff, " + "and I\'ll puff, " + "and I\'ll blow your house in!") // Example of concatenation
document.write("<br>"); //Adds a line break

var C = "Steph " + "Curry" // Set a variable to concatenation
document.write(C) // Print variable
document.write("<br>"); //Adds a line break

var Team = "Warriors", pointGuard = "Steph Curry", shootingGuard = "Klay Thompson", smallForward = "Andrew Wiggins", powerForward = "Draymond Green", center = "Kevon Looney"; // Set multiple varables
document.write(pointGuard + " plays for the " + Team); // Print multiple variables
document.write("<br>"); //Adds a line break

var Team = Team.fontcolor("yellow") // Set font color

var pointGuard = pointGuard.fontcolor("grey") // Set font color

var shootingGuard = shootingGuard.fontcolor("blue") // Set font color

var smallForward = smallForward.fontcolor("orange") // Set font color

var powerForward = powerForward.fontcolor("green") // Set font color

var center = center.fontcolor("purple") // Set font color

document.write(Team + "\'s starting five is: " + pointGuard + " " + shootingGuard + " " + smallForward + " " + powerForward + " " + center); // Print all of those variables in their font color

m = 3 + 3 // Example of statement

function My_First_Function()    { // Example of a function
    var str = "One of the Warrior colors is blue!";
    var result = str.fontcolor("blue");
    document.getElementById("Blue_Text").innerHTML = result;
}

