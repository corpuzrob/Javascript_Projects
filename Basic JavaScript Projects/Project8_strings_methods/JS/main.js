function full_Sentence()    {
    var part_1 = "How much wood ";
    var part_2 = "would a woodchuck chuck ";
    var part_3 = "if a woodchuck could chuck wood?"
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}