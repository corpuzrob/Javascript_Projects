//This is a function that will change the string and change the font color to red
function Team_Color1()    {
    var Color1 = "This is the first team color!";
    var result = Color1.fontcolor("red");
    document.getElementById("Color1").innerHTML = result;
}


//This is a function that will change the string and change the font color to blue
function Team_Color2()    {
    var Color2 = "This is the second team color!";
    var result = Color2.fontcolor("blue");
    document.getElementById("Color2").innerHTML = result;
}

//This is a function that concatenates two strings into one and prints the resulting sentence
function myFunction()   {
    var sentence = "I am trying to";
    sentence += " figure this out.";
    document.getElementById("Concatenate").innerHTML = sentence;
}
// Have not figured out this part yet
function Change_Header()    {
    var z = document.getElementById("h1");
    z.style.color = "green";
    document.write("The new header color is " + z);
}

function Greater_Or_Less(x,y)  {
    // var x = 5
    // var y = 6
    if (x > y)  {
        document.write(x + " is greater than " + y + "." );
    }   else if (x < y) {
        document.write(x + " is less than " + y + "." );
    }   else {
        document.write(x + " is equal to " + y + "." );
    }
}

