// Concat() method:
function full_Sentence()    {
    var part_1 = "How much wood ";
    var part_2 = "would a woodchuck chuck ";
    var part_3 = "if a woodchuck could chuck wood?"
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

// Slice() method:
function slice_Method() {
    var Original_Sentence = "How much wood would a woodchuck chuck if a woodchuck could chuck wood?";
    var Sentence_Fragment = Original_Sentence.slice(9,13);
    document.getElementById("Slice").innerHTML = Sentence_Fragment;
}

// Search() method:
function Search_Method()  {
    let text= "Green eggs and ham";
    let position = text.search("and");
    document.getElementById("Search_Method").innerHTML = position;
}

// String() method:
function string_Method()    {
    var X =8675209;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

// Precision() method:
function precision_Method() {
    var P = 3.1415926535897932384626433832795028841971;
    document.getElementById("Precision").innerHTML = P.toPrecision(5);
}

// toFixed method:
function number_to_Fixed_Method() {
    let GR1 = 1.618033988749894;
    let GR2 = GR1.toFixed(3)
    document.getElementById("to_Fixed_Method").innerHTML = GR2;
}



// This is something I tried but couldn't get to work:
// function Text_Search()  {
//     // document.getElementById("Green_Eggs_and_Ham").innerHTML = string;
//     var string = "Green eggs and ham";
//     var result = string.search(User_Search);
//     document.getElementById("Search_Result").innerHTML = result;
// }

// function Text_Search()  {
//     // document.getElementById("Green_Eggs_and_Ham").innerHTML = string;
//     var str = Green_Eggs_and_Ham;
//     var result = str.includes("ham", 1);
//     document.getElementById("Search_Result").innerHTML = result;
// }
