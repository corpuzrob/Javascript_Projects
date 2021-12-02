// An if statement using the new Date().getHours() method
function get_Date() {
    if (new Date().getHours() < 12) {
        document.getElementById("Greeting").innerHTML = "Good morning!";
    }

    else if (new Date().getHours() >= 18) {
        document.getElementById("Greeting").innerHTML = "Good evening!";
    }

    else {
        document.getElementById("Greeting").innerHTML = "Good afternoon!";
    }

}

// This was an alternate I tried first
// function get_Date() {
//     if (new Date().getHours() < 18) {
//         document.getElementById("Greeting").innerHTML = "Good day!";
//     }

//     if (new Date().getHours() >= 18) {
//         document.getElementById("Greeting").innerHTML = "Good evening!";
//     }
// }