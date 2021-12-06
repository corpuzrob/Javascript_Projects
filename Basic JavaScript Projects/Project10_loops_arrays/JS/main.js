//This demonstrates "return":
function Greeting_Function(name) {
    return "Hey there " + name + ", here are some buttons to click on:";
}
document.getElementById("Greeting_Name").innerHTML = Greeting_Function("friend");

// This demonstrates a while loop:
function count_down_from_ten() {
    var Digit = "";
    var X = 10;
    while (X >= 0)    {
        Digit += "<br>" + X;
        X = X - 1;
    }
    document.getElementById("Loop").innerHTML = Digit;
}
// This demonstrates the "length" property
function length_function()  {
    let text = "pneumonoultramicroscopicsilicovolcanoconiosis";
    let length = text.length;
    // console.log(length);
    document.getElementById("length_longest_word").innerHTML = "Pneumonoultramicroscopicsilicovolcanoconiosis is " + length + " letters long.";
}

// This demonstrates a for loop:
var Instruments = ["Guiter", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++)    {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// The next two sections demonstrate arrays:
function cat_pics() {
    var Cat_Picture = {};
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

function Get_Weather()  {
    var Weather_Forecast = {};
    Weather_Forecast[0] = "sunny";
    Weather_Forecast[1] = "cloudy";
    Weather_Forecast[2] = "rainy";
    Weather_Forecast[3] = "overcast";
    Weather_Forecast[4] = "snowy";
    Weather_Forecast[5] = "windy";
    Weather_Forecast[6] = "stormy";

    var Day_of_the_Week = {};
    Day_of_the_Week[0] = "Monday";
    Day_of_the_Week[1] = "Tuesday";
    Day_of_the_Week[2] = "Wednesday";
    Day_of_the_Week[3] = "Thursday";
    Day_of_the_Week[4] = "Friday";
    Day_of_the_Week[5] = "Saturday";
    Day_of_the_Week[6] = "Sunday";


    document.getElementById("Weather_Array").innerHTML = 
        "On " + Day_of_the_Week[0]+ ", the weather will be " + Weather_Forecast[0] + "." + "<br>" + 
        "On " + Day_of_the_Week[1]+ ", the weather will be " + Weather_Forecast[1] + "." + "<br>" +
        "On " + Day_of_the_Week[2]+ ", the weather will be " + Weather_Forecast[2] + "." + "<br>" +
        "On " + Day_of_the_Week[3]+ ", the weather will be " + Weather_Forecast[3] + "." + "<br>" +
        "On " + Day_of_the_Week[4]+ ", the weather will be " + Weather_Forecast[4] + "." + "<br>" +
        "On " + Day_of_the_Week[5]+ ", the weather will be " + Weather_Forecast[5] + "." + "<br>" +
        "On " + Day_of_the_Week[6]+ ", the weather will be " + Weather_Forecast[5] + "." + "<br>";
}

// The next two sections demonstrate a constant:
function constant_function() {

    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " + 
        Musical_Instrument.type + " was " + Musical_Instrument.price;
 }

 function Food_Function() {

    const Food_Function = {name:"apple", type:"fruit", healthiness:"healthy"};
    Food_Function.name = "broccoli";
    Food_Function.type = "vegetable";
    Food_Function.healthiness = "healthy";
    Food_Function.price_per_pound = 2.00;
    document.getElementById("Food_Constant").innerHTML = "The " + 
        Food_Function.type + " " + Food_Function.name + " is considered " + Food_Function.healthiness + " and it costs $" + Food_Function.price_per_pound + " per pound.";
}

// This demonstrates the "let" keyword and the return statement:
function Donor_Function()   {
    let donor = {
        name: "Joe Schmoe",
        join_date: "2013-08-25",
        recent_donation_date: "2020-11-03",
        recent_donation_amount: "4000",
        total_donated: "32000",
        description : function()    {
            return this.name + " joined on " + this.join_date + 
            ". <br><br> Their most recent donation was $" + 
            this.recent_donation_amount + ". <br><br>" + 
            this.name + " has donated a total of $" + 
            this.total_donated + ". <br>";
        }
    };
    document.getElementById("Donor_Object").innerHTML = donor.description();
}

// This demonstrates the "continue" keyword:
function continue_function()    {
    text = ("<br>")
    for (let a = 0; a < 10; a++)    {
        if (a === 3)    { continue; }
        text += "The number is " + a + "<br>";
        document.getElementById("continue_test").innerHTML = text;
        // "a is equal to: " + a;
    }
}

// This demonstrates scope and the "let" keyword:
function Let_Function() {
    var Y = 42;
    document.write("This uses \"var\" within a block:<br>")
    document.write(Y);
    {
        var Y = 24;
        document.write("<br>" + Y);
    }
    document.write("<br>" + Y + "<br><br>");

    var Y = 42;
    document.write("This uses \"let\" within a block:<br>")
    document.write(Y);
    {
        let Y = 24;
        document.write("<br>" + Y);
    }
    document.write("<br>" + Y + "<br>");
}

// This was a test of an alert
// alert(document.getElementById("p1").innerHTML);

