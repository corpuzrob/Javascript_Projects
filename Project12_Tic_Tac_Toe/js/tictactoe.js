// This variable keeps track of whose turn it is. 
let activePlayer = 'X';
// This array stores an array of moves. We use this to detemine win conditions.
let selectedSquares = [];

//This function is for placing an x or o in a square.
function placeXOrO(squareNumber)    {
    // This condition ensures a square hasn't been selected already.
    // The .some() method is used to check each element of selectedSquare array
    // to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber)))   {
        // This variable retrieves the html element id that was clicked.
        let select = document.getElementById(squareNumber);
        // This condition checks who's turn it is.
        if (activePlayer === 'X')   {
            // If activePlayer is equal to 'X', the x.png is placed in HTML.
            select.style.backgroundImage = 'url("images/x.png")';
            // Active player may only be 'X' or 'O' so, if not 'X' it must be 'O'
        }
    }
}

/* 

// A test of a function call in ArrowFunction.html

var ages = [2, 10, 18, 20, 13, 15, 30];

//Using the arrow function to pass in a parameter of age
checkAge = (age) => age >= 18;

function ageFunction()   {
    //Use the .some() to iterate through the array of ages and display the result.
    document.getElementById('displayAge').innerHTML = ages.some(checkAge);
} 

*/