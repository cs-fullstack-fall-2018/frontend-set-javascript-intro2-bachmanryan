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

var stringOfArray = "";
for(var x = 0; x < newArray.length; x++)
{
    stringOfArray += newArray[x] + ", ";
}

document.getElementById("newHeader").textContent= stringOfArray;

newArray.splice(2,1);
newArray.splice(3,1);

document.getElementById("newHeaderSpot").textContent=stringOfArray;