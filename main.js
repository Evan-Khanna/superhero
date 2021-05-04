
    
function getParagraph1()
{
    var inputs = [];

    for (var j = 1; j <= 6; j++) 
    {
       inputs.push(document.getElementById("para1_input_"+j).value);
    }
    inputs.join(".");
    document.getElementById("paragraph_1").innerHTML = inputs.join(".");
    }

     
function getParagraph2()
{
    var inputs2 = [];

    for (var i = 1; i <= 6; i++) 
    {
       inputs2.push(document.getElementById("para2_input_"+i).value);
    }
    inputs2.join(".");
    document.getElementById("paragraph_2").innerHTML = inputs2.join(".");
    }
   