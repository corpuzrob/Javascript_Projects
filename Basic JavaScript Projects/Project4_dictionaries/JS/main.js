// Create a dictionary
function my_Dictionary()    {
    var Warriors = {
        coach: "Steve Kerr",
        pointGuard1: "Steph Curry",
        shootingGuard1: "Klay Thompson",
        smallForward1: "Andrew Wiggins",
        powerForward1: "Draymond Green",
        center1: "Kevon Looney",
        pointGuard2: "Jordan Poole",
        shootingGuard2: "Damion Lee",
        smallForward2: "Andre Iguodala",
        powerForward2: "Otto Porter Jr.",
        center2: "James Wiseman",
        pointGuard3: "Chris Chiozza",
        shootingGuard3: "Gary Payton Jr.",
        smallForward3: "Juan Toscano-Anderson",
        powerForward3: "Nemanja Bjelica",
        pointGuard: "Jeff Dowtin",
        smallForward4: "Moses Moody",
        powerForward4: "Jonathan Kuminga",
        smallForward5: "Kelly Oubre Jr."
    };

    // Return some key value pairs
    document.getElementById("Dictionary1").innerHTML = Warriors.pointGuard1 + ", " + Warriors.pointGuard2 + ", " + Warriors.smallForward1 + ", " + Warriors.powerForward1 + ", and " + Warriors.center1;

    // Delete a kvp 
    delete Warriors.smallForward5;

    document.getElementById("Dictionary2").innerHTML = Warriors.smallForward5;
}

// Attempted to print statement after running function but couldn't figure out how to not have it be first
// document.write("No, Kelly Oubre Jr. is no longer a member of the Warriors.");

