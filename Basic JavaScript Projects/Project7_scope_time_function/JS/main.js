var Test_Income = 223048;

// function using global variable
function Tax_Bracket_Function_Test() {
    var Tax_Bracket_Test;
    Tax_Bracket_Test = (Test_Income >= 400000) ? "will have their taxes raised.":"will NOT have their taxes raised.";
    document.getElementById("Tax_Bracket_Status_Test").innerHTML = "Someone whose income is less than $400000 " + Tax_Bracket_Test;
}

// function using a local variable
function Tax_Bracket_Function() {
    var User_Income, Tax_Bracket;
    User_Income = document.getElementById("User_Income").value;
    Tax_Bracket = (User_Income >= 400000) ? "your taxes will probably be raised.":"your taxes will NOT be raised.";
    document.getElementById("Tax_Bracket_Status").innerHTML = "At an income of $" + User_Income + ", " + Tax_Bracket;
}

function Horoscope() {

    var User_Birth_Month = document.getElementById("User_Birth_Month").value.toLowerCase();
    if (User_Birth_Month == "january")   {
        document.getElementById("User_Zodiac").innerHTML = "As someone born in " + capitalize(User_Birth_Month) + ", your zodiac sign is a waste of time, since horoscopes are absolutely pointless.";
    }

    else if (User_Birth_Month == "february")   {
        document.getElementById("User_Zodiac").innerHTML = "As someone born in " + capitalize(User_Birth_Month) + ", your zodiac sign is a waste of time, since horoscopes are absolutely pointless.";
    }

    else if (User_Birth_Month == "march")   {
        document.getElementById("User_Zodiac").innerHTML = "As someone born in " + capitalize(User_Birth_Month) + ", your zodiac sign is a waste of time, since horoscopes are absolutely pointless.";
    }

    else if (User_Birth_Month == "april")   {
        document.getElementById("User_Zodiac").innerHTML = "As someone born in " + capitalize(User_Birth_Month) + ", your zodiac sign is a waste of time, since horoscopes are absolutely pointless.";
    }

    else if (User_Birth_Month == "may")   {
        document.getElementById("User_Zodiac").innerHTML = "As someone born in " + capitalize(User_Birth_Month) + ", your zodiac sign is a waste of time, since horoscopes are absolutely pointless.";
    }

    else if (User_Birth_Month == "june")   {
        document.getElementById("User_Zodiac").innerHTML = "As someone born in " + capitalize(User_Birth_Month) + ", your zodiac sign is a waste of time, since horoscopes are absolutely pointless.";
    }

    else if (User_Birth_Month == "july")   {
        document.getElementById("User_Zodiac").innerHTML = "As someone born in " + capitalize(User_Birth_Month) + ", your zodiac sign is a waste of time, since horoscopes are absolutely pointless.";
    }

    else if (User_Birth_Month == "august")   {
        document.getElementById("User_Zodiac").innerHTML = "As someone born in " + capitalize(User_Birth_Month) + ", your zodiac sign is a waste of time, since horoscopes are absolutely pointless.";
    }

    else if (User_Birth_Month == "september")   {
        document.getElementById("User_Zodiac").innerHTML = "As someone born in " + capitalize(User_Birth_Month) + ", your zodiac sign is a waste of time, since horoscopes are absolutely pointless.";
    }

    else if (User_Birth_Month == "october")   {
        document.getElementById("User_Zodiac").innerHTML = "As someone born in " + capitalize(User_Birth_Month) + ", your zodiac sign is a waste of time, since horoscopes are absolutely pointless.";
    }

    else if (User_Birth_Month == "november")   {
        document.getElementById("User_Zodiac").innerHTML = "As someone born in " + capitalize(User_Birth_Month) + ", your zodiac sign is a waste of time, since horoscopes are absolutely pointless.";
    }

    else if (User_Birth_Month == "december")   {
        document.getElementById("User_Zodiac").innerHTML = "As someone born in " + capitalize(User_Birth_Month) + ", your zodiac sign is a waste of time, since horoscopes are absolutely pointless.";
    }

    else {
        document.getElementById("User_Zodiac").innerHTML = "Sorry, I didn't understand.  Please enter your birth month.";
    }
}

function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }