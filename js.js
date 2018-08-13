// var arrayOfNumbers = ["Bob", "Fred", "Josh", "Tosh", "Harry"];
//
// var stringOfArray = "";
// for(var x = 0; x < arrayOfNumbers.length; x++)
// {
//     stringOfArray += arrayOfNumbers[x] + ", ";
// }
//
// document.getElementById("something").textContent= stringOfArray;

var newArray = [1,2,3,4,5,6];
newArray.splice(4,1);
newArray.splice(2,1);

var stringOfArray = "";
for(var x = 0; x < newArray.length; x++)
{
    stringOfArray += newArray[x] + ", ";
}

document.getElementById("newHeader").textContent= stringOfArray;



document.getElementById("newHeaderSpot").textContent=stringOfArray;