
function checkString(str)
{
    if(str === "")
    {
        console.log("Not valid string");
        return false;
    }

    if(!isNaN(str))
    {
        console.log("Not valid string");
        return false;
    }
}

/**

1. Write a JavaScript function that reverse a number. 
Example x = 32243;
Expected Output: 34223 

*/

function reverseNumbers(numbers)
{
    if(isNaN(numbers)){
        console.log(`This is ${numbers} not a number`);
        console.log(`Try again`); 
    }

    const newNum = parseFloat(numbers); // to convert the number into a float from a string 

    newNum.toString(); // to convert the number into a string

    newNum.split(''); // to convert the number of a string format into a array of characters

    newNum.reverse(); // arrays have access to built in function called reverse

    newNum.join(''); //reversed characters into a String.
}

//////////////////////////////////////////////////////////////////////

/**

2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g.,
madam 

*/

function checkPalindrome(str)
{
    if(str === "")
    {
        console.log("Not valid string");
        return false;
    }

    let j = str.length -1;
    for( let i = 0 ; i < j/2 ;i++)
    {
      let x = str[i] ;//forward character
      let y = str[j-i];//backward character
      if( x != y)
      {
        // return false if string not match
        return false;
      }
    }
    /// return true if string is palindrome
    return true;

}

//////////////////////////////////////////////////////////////////////

/**

3. Write a JavaScript function that generates all combinations of a string. 
Example string: 'dog' 
Expected Output: d, do, dog, o, og, g

*/

function getCombinations(str)
{
    checkString(str);

    let combinations = [] //add the combination to this array

    for(let i=0 ; i<str.length;i++)
    {
        for(let j=i+1; j<str.length+1 ;j++)
        {
            combinations.push(str.slice(i,j)); // push() function to add to the array 
            // slice(x,y) will return array from start x to the end y
        }
    }

    return combinations;

}

//////////////////////////////////////////////////////////////////////

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string: 'webmaster' 
// Expected Output: 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function getAlphaOrder(str)
{
    checkString(str);

    var arr = str.split('').sort().join(""); // to convert the str to an array
    return arr;
    
}

//////////////////////////////////////////////////////////////////////

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of
// each word of the string in upper case. 
// Example string: 'the quick brown fox' 
// Expected Output: 'The Quick Brown Fox '

function convertLettersUpper(str)
{
    checkString(str);

    const words = str.split(" ");

    for(var i = 0; i < words.length; i++)
    {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ");
}

//////////////////////////////////////////////////////////////////////

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word
// within the string. 
// Example string: 'Web Development Tutorial' 
// Expected Output: 'Development'

function findLongestWord(str)
{
    //convert the str to a string 

    var words = str.split(' ');

    //Initiate a variable that will hold the length of the longest word
    var longestWord = 0;

    var word = null;

    for(var i=0; i < words.length; i++)
    {
        if(longestWord < words[i].length)
        {
            longestWord = words[i].length;
            word = words[i];
        }
    }

    return word;
}


//////////////////////////////////////////////////////////////////////

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of
// vowels within the string. 
// Note: As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as
// vowel here. 
// Example string: 'The quick brown fox' 
// Expected Output: 5

function countVowels(str){
    checkString(str);

    let vowels =['a','u','e','o','i'];

    let countVowels = 0;

    for(let letter of str.toLowerCase())
    {
        for(let v of vowels)
        {
            if(letter === v)
            {
                countVowels++;
            }
        }
    }

    return countVowels;
}


//////////////////////////////////////////////////////////////////////

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is
// prime or not. 
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
// divisors other than 1 and itself.

function IsPrime(num)
{
    if(isNaN(num)) // true then it Not a number
    {
        console.log("Not a number");
        return false;
    }

    if(num < 0)
    {
        console.log("should be positive");
        return false;
    }

    // check if number is equal to 1
    if (num === 1) {
        console.log("1 is neither prime nor composite number.");
    }

    if(num>1)
    {
        for(var x = 2; x<num;x++)
        {
            if(num % x === 0)
            {
                return false;
            }
        }

        return true;
    }

}



