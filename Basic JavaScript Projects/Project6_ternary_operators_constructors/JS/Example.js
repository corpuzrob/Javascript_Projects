function count_Function()   {
    document.getElementById("Counting").innerHTML = Count();
    function Count()    {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}

function nest_Function()   {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count()    {
        var Starting_point = 5;
        function Minus_two() {Starting_point -= 2;}
        Minus_two();
        return Starting_point;
    }
}

function nest_Function2()   {
    document.getElementById("Nested_Function2").innerHTML = Scales();
    function Scales()    {
        var left_Scale = 15; var right_Scale = 14;
        function Minus_two() {Starting_point -= 2;}
        if (left_Scale > right_Scale)   {
            document.write("The left scale is heavier.");
        }   else if (left_Scale < right_Scale)   {
            document.write("The right scale is heavier.");
        }   else {
            document.write("The left and right scales weigh the same.");
        }
    }
}