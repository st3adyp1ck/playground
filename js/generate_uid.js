"use strict";
/*
// CHALLENGE Generate a Unique User Identifier (UID)

// ====ORIGINAL CODE====
function generateUID(firstName, lastName) {
  let firstPart;
  if (firstName.length >= 3) {
    firstPart = firstName.slice(0, 3);
  } else {
    firstPart = firstName;
  }
  let secondPart;
  if (lastName.length >= 3) {
    secondPart = lastName.slice(0, 3);
  } else {
    secondPart = lastName;
  }
  let partialUID = firstPart + secondPart;

  let min = 1000;
  let max = 9999;
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  let fullUID = partialUID + randomNumber;
  return fullUID.toLowerCase();
}

// ====REFACTORED CODE====

function generateUID(firstName, lastName) {
  const firstPart = firstName.slice(0, 3);
  const secondPart = lastName.slice(0, 3);
  const partialUID = firstPart + secondPart;

  const randomNumber = Math.floor(Math.random() * 9000) + 1000;

  return (partialUID + randomNumber).toLowerCase();
}

// Example usage:
console.log(generateUID("John", "Doe")); // could return something like "johdoe2345"
console.log(generateUID("Elijah", "Belous")); // could return something like "elibel7812"
*/
