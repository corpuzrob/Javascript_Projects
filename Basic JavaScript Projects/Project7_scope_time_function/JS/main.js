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

function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
    if (new Date().getHours() >= 18) {
        document.getElementById("Greeting").innerHTML = "How are you this evening?";
    }
}
