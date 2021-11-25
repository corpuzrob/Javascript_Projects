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