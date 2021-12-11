function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    // alert(characterType + " is from the " + character.innerHTML + " house!");
    alert(character.innerHTML + " is from the " + characterType + " house!");

}


// Arrow function example:

// myFunction = function() {
//     return "This is my function";
// }

// The above and below do the same thing.

// myFunction = () => "This is my function";