function full_Sentence()    {
    var part_1 = "How much wood ";
    var part_2 = "would a woodchuck chuck ";
    var part_3 = "if a woodchuck could chuck wood?"
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Original_Sentence = "How much wood would a woodchuck chuck if a woodchuck could chuck wood?";
    var Sentence_Fragment = Original_Sentence.slice(9,13);
    document.getElementById("Slice").innerHTML = Sentence_Fragment;
}

// This is something I tried but couldn't get to work 
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

function Text_Search()  {
    // let text= "Green eggs and ham";
    let text= Green_Eggs_and_Ham;
    let position = text.search("and");
    document.getElementById("Search_Result").innerHTML = position;
}