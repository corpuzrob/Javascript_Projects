/* Lets user choose from a list and prints an output specific to that choice */
function Drink_Function()   {
    var Drink_Output;
    var Drinks = document.getElementById("Drink_Input").value;
    var Drink_String1 = "Excellent choice!  "
    var Drink_String2 = " is a great drink!";
    switch(Drinks)  {
        case "beer":
            Drink_Output = Drink_String1 + "Beer" + Drink_String2;
        break;
        case "hard seltzer":
            Drink_Output = Drink_String1 + "Hard seltzer" + Drink_String2;
        break;
        case "wine":
            Drink_Output = Drink_String1 + "Wine" + Drink_String2;
        break;
        case "vodka":
            Drink_Output = Drink_String1 + "Vodka" + Drink_String2;
        break;
        case "whiskey":
            Drink_Output = Drink_String1 + "Whiskey" + Drink_String2;
        break;
        case "rum":
            Drink_Output = Drink_String1 + "Rum" + Drink_String2;
        break;
        case "tequila":
            Drink_Output = Drink_String1 + "Tequila" + Drink_String2;
        break;
        case "gin":
            Drink_Output = Drink_String1 + "Gin" + Drink_String2;
        break;
        case "brandy":
            Drink_Output = Drink_String1 + "Brandy" + Drink_String2;
        break;
        case "cognac":
            Drink_Output = Drink_String1 + "Cognac" + Drink_String2;
        break;
        default:
            Drink_Output = Drink_String1 + "Please enter a drink exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Drink_Output;
}
/* // This is a test of the "getElementsByClassName" method. */
function Class_Name_Function()    {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

/* // Draw lines from corner to corner on a box/canvas */
var c = document.getElementById("Canvas_Test");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(500, 250);
ctx.stroke();

ctx.moveTo(0,250);
ctx.lineTo(500, 0);
ctx.stroke();

/* This creates a gradient that goes from black to white, left to right, and top to bottom*/
var grd = ctx.createLinearGradient(0, 0, 400, 400);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(0, 0, 500, 250);
