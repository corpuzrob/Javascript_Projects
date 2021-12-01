// This next three functions use ternary operations
function Ride_Function()    {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function()    {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Drink_Function()    {
    var Age2, Can_drink;
    Age2 = document.getElementById("Age2").value;
    Can_drink = (Age2 < 21) ? "You are not old enough":"You are old enough";
    document.getElementById("Drink").innerHTML = Can_drink + " to drink.";
}

// The following is reference for Constructor
// class Customer  {
//     string FullName;
//     Boolean Active;
//     Customer(string name)   {
//         Fullname = name;
//         Active = true;
//     }
// }

// Customer cust = new Customer("Brenda Smith");

// The following functions use object constructors [Vehicle() and Customer()] and keywords (Jack, Emily, Ted, Barney, etc.)
function Vehicle(Make, Model, Year, Color)  {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction1()   {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Customer(Gender, Age, Subscription, Status)   {
    this.Customer_Gender = Gender;
    this.Customer_Age = Age;
    this.Customer_Subscription = Subscription;
    this.Customer_Status = Status;
}

var Ted = new Customer("male", 35, "subscribed", "standard");
var Robin = new Customer("female", 34, "unsubscribed", "VIP");
var Lily = new Customer("female", 35, "subscribed", "VIP");
var Marshall = new Customer("male", 35, "unsubscribed", "standard");
var Barney = new Customer("male", 37, "blocked", "banned");
function myFunction2()  {
    document.getElementById("New_and_This").innerHTML =
    "Barney is a " + Barney.Customer_Age + "-year-old " + Barney.Customer_Gender + 
    " whose subscription status is " + Barney.Customer_Subscription + 
    " and general status is " + Barney.Customer_Status + ".";
}
