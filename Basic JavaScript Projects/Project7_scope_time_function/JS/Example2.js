function Age_Function() {
    Age = document.getElementById("Age").Value;
    if (Age >= 18)  {
        Vote = "You are old enough to get drafted!";
    }
    else {
        Vote = "You are not old enough to get drafted!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function()    {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0)  {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18)   {
    }
    else{
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}