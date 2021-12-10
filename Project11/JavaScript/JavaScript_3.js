function displayType(character) {
    var characterType = character.getAttribute("data-character-type");
    // alert(characterType + " is from the " + character.innerHTML + " house!");
    alert(character.innerHTML + " is from the " + characterType + " house!");

}