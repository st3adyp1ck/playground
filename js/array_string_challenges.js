"use strict";
/*
//   ========================================
//   JAVASCRIPT CHALLENGES
//   ========================================
//   1. FILTER AND DOUBLE FUNCTION CHALLENGE
//   ----------------------------------------
function filterAndDouble(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    const multiply = array[i] * 2;
    if (array[i] > 10) {
      newArray.push(multiply);
    }
  }
  return newArray;
}

console.log(filterAndDouble([3, 7, 12, 5, 20]));
console.log(filterAndDouble([2, 4, 5]));

//   ----------------------------------------
//   2. FILTER AND REVERSE
//   ----------------------------------------

//   ====== FULL SOLUTION ======
function processSentence(string) {
  const wordArray = string.split(" ");
  const filteredAndReversedArray = wordArray
    .filter((word) => word.length >= 3) // Filter words that are 3 or more characters
    .map((word) => word.split("").reverse().join("")); // Reverse each filtered word

  const reverseString = filteredAndReversedArray.join(" ");
  return reverseString;
}

//   ====== REFACTORED SOLUTION ======
function processSentence(string) {
  return string
    .split(" ") // Split the sentence into words
    .filter((word) => word.length >= 3) // Filter words that are 3 or more characters long
    .map((word) => [...word].reverse().join("")) // Reverse each filtered word
    .join(" "); // Join the words back into a single string
}

console.log(processSentence("Javascript is fun and Challenging"));
console.log(processSentence("Hello World"));
console.log(processSentence("I am a coder!"));
//   ========================================
*/
