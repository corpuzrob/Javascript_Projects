//I'm hoping it's ok that I don't add comments on everything since I'm already using document.write statements to explain what's happening.

function statements()   {
    //Displays type: string
    document.write("I've got the world on a " + typeof "Banana" + ".");
    document.write("<br>");

    //Displays type: number
    document.write("Age is just a " + typeof 3.141592654 + ".");
    document.write("<br>");

    //Displays string and number with coercion
    document.write("The answer to life, the universe, and everything is " + 42 + ".")
    document.write("<br>");

    //Displays infinity
    document.write("To " + 3E455 + " and beyond.");
    document.write("<br>");

    //Displays negative infinity
    document.write("Would infinity minus 2 infinities be " + -5E503 + "?");
    document.write("<br>");

    //Shows results of some math and a false statement in the console
    console.log("True or false? The answer is not: ")
    console.log(6 * 7);
    console.log("?")
    console.log(2 < 1);
}

function booleans()   {
    //Uses a boolean to display true
    document.write("True or false?  Wind chimes are terrible.");
    document.write("<br>");
    document.write(11>4);
    document.write("<br>");
    document.write("<br>");

    //Uses a boolean to display false
    document.write("True or false?  You should get wind chimes.");
    document.write("<br>");
    document.write(1>6);
    document.write("<br>");
    document.write("<br>");

    //Uses a boolean to display false with a == sign
    document.write("True or false? The sun is a planet. ");
    document.write("<br>");
    document.write(2==4);
    document.write("<br>");
    document.write("<br>");

    //Uses a boolean to display true with a == sign
    document.write("True or false? The sun is a star. ");
    document.write("<br>");
    document.write(3==3);
    document.write("<br>");
    document.write("<br>");

    //Uses a === sign to display true with a matching data type and matching value
    x = 3;
    y = 3;
    document.write("True or false?  3 is equal to 3.");
    document.write("<br>");
    document.write (x === y);
    document.write("<br>"); 
    document.write("<br>");

    //Uses a === sign to display false with a different data type and different value
    x = 5;
    y = "comet";
    document.write("True or false?  5 is equal to 'comet'.");
    document.write("<br>");
    document.write (x === y);
    document.write("<br>"); 
    document.write("<br>");

    //Uses a === sign to display false with a different data type but same value
    x = 5;
    y = "5";
    document.write("True or false?  The number 5 is equal to the string 5.");
    document.write("<br>");
    document.write (x === y);
    document.write("<br>"); 
    document.write("<br>");

    //Uses a === sign to display false with the same data type but different value
    p = "planet";
    m = "moon";
    document.write("True or false?  If p = planet, and m = moon, p is equal to m.");
    document.write("<br>");
    document.write (p === m);
    document.write("<br>"); 
    document.write("<br>");

    // Uses the AND operator to display true
    document.write("True or false?  100 > 10 and 20 < 200");
    document.write("<br>");
    document.write (100 > 10 && 20 < 200);
    document.write("<br>");
    document.write("<br>");

    // Uses the AND operator to display false
    document.write("True or false?  100 > 10 and 20 > 200");
    document.write("<br>");
    document.write (100 > 10 && 20 > 200);
    document.write("<br>");
    document.write("<br>");

    // Uses the OR operator to display TRUE
    document.write("True or false?  100 > 10 or 20 > 200");
    document.write("<br>");
    document.write (100 > 10 || 20 > 200);
    document.write("<br>");
    document.write("<br>");

    // Uses the OR operator to display false
    document.write("True or false?  100 < 10 or 20 > 200");
    document.write("<br>");
    document.write (100 < 10 || 20 > 200);
    document.write("<br>");
    document.write("<br>");
}

// Uses the NOT operator to display false
function not_Function1()    {
    document.getElementById("Not1").innerHTML = !(200 > 20);
}

// Uses the NOT operator to display true
function not_Function2()    {
    document.getElementById("Not2").innerHTML = !(200 < 20);
}