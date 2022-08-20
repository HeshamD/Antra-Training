/**

1. Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output: 34223 

*/

function reverseNumbers(numbers)
{
    while(isNaN(numbers)){
        console.log(`This is ${numbers} not a number`);
        console.log(`Try again`);
    }


    const newNum = parseFloat(numbers); // to convert the number into a float from a string 

    newNum.toString(); // to convert the number into a string

    newNum.split(''); // to convert the number of a string format into a array of characters

    newNum.reverse(); // arrays have access to built in function called reverse

    newNum.join(''); //reversed characters into a String.
}