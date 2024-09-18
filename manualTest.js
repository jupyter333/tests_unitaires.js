import { countLength } from './countLength.js';

// Programme de test
let myString = "Hello, world!"; // chaîne de test
let stringLength = countLength(myString); //appelons countlength

console.log("La longueur devrait être égale à " + myString.length);
console.log("La longueur donnée est " + stringLength);

if (myString.length === stringLength) {
    console.log("Ce test est réussi");
} else {
    console.log("Test échoué");
}