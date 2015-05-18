// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x,y){
  if (x > y){
    return x
  }else;
  {
  return y
  }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x,y,z){
    var threeNumbers = [x,y,z];
    var sortedNumbers = threeNumbers.sort;
    return threeNumbers[2];
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    var character = char;
    if ( char === 'a'||char ==='e'||char ==='i'||char ==='o'||char ==='u'){
      return true;
    }else{
      return false;
    }
}

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket".
//That is, double every consonant and place an occurrence of "o" in between.
//For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    var newArray = phrase.split("");
    var emptyArray = [];
    newArray.forEach (function(x){
      if (x !== 'a' && x !== 'e' && x !== 'i' && x !=='o' && x !== 'u')
        {emptyArray.push(x + 'o' + x);
        }else{
        emptyArray.push(x)};
      });
    return emptyArray.join("");
  }

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively)
//all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10,
// and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(arrayHere){
    var sums = arrayHere.reduce(function(a,b){
      return a + b
    });
    return sums
}

function multiply(otherArray){
     var products = otherArray.reduce(function(a,b){
      return a * b
    });
    return products
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(x){
    return x.split('').reverse().join('')
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    var wordLength = words.map(function (x){
      return x.length;
    });
    var longestWord = wordLength.sort( function(a,b){
      return a - b;
    });
    return longestWord[longestWord.length -1];
  }
// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words
//that are longer than i.
// ---------------------

function filterLongWords(words, i){
   var longWords = words.filter(function(word){
      if (word.length > i) {
        return word};
      });
    return longWords
  }
// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it.
//Represent the frequency listing as a Javascript object.
//Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

// I know we should use a for loop on this one but I'm still kind of lost on how they work.

// function charFreq(string){
//     new Object(freqListing);
//     for (var x = 0; x <= string.length; x++) {
//


