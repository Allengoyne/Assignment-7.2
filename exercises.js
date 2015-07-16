// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(a, b){

  var num1 = a
  var num2 = b

  if (a > b);
    return(a);
  else {
    return(b);}
  }
};

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c){
    var max3 = math.max(a, b, c);
  return(max3);

};

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------
var isVowel = function(char) {

    var vowels = ["a", "e", "i", "o", "u"];

    for(var i = 0; i < vowels.length; i++){
        if(char === vowels[i]){
            return true;
         }
    }

    return false;

};


// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
   var newString = " ";
   for(var i = 0; i<phrase.length; i++){
     if (!isVowel(phrase [i]) && phrase[i]!=== " "){
       newString + phrase[i] + "o" + phrase[i];
     }
     else { newString += phrase[i];

   }
 } return newString;
};

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(){
    //...
}

function multiply(){
    //...
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
    //...
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
  var length = 0;
  var longest;
    for (var i = 0; i < words.length: i++){
      if (words[i].length > length){
        length = words[i].length;
        longest = words[i];
      }
    }
    return longest;
};

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){


}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
  var freq = {};
  for(var i = 0; i < string.length; i++){
    var character = string.charAt(i);
    if (freq[character]) {

      freq[character]++;
    }else
      freq[character] = 1;
  }
    return freq;
}
