
// Create an array with the cards
 var cards = ["queen", "queen", "king", "king"];
 
//Create an array cardsInPlay, Set its value to an empty array []
var cardsInPlay = [];

//Create a variable cardOne 
//Store the first item in the cards array in the variable cardOne
//Use the array name, square brackets, and the index number to 
var cardOne = cards[0]; 

//Use the push() method to add cardOne to the end of the cardsInPlay array.
cardsInPlay.push(cardOne);


//Use console.log() to display the card that the user flipped
//The message that is displayed in the console should say "User flipped queen".
console.log("User flipped" + cardOne);

//Create a variable cardTwo.
//Store the third item in the cards array in the variable cardTwo.
 var cardTwo = cards[2];

//Use the push() method to add cardTwo to the end of the cardsInPlay array.
 cardsInPlay.push(cardTwo);

 
//Use console.log() to display the card that the user flipped
//The message that is displayed in the console should say "User flipped king".
console.log("User flipped " + cardTwo);

//ADD LOGIC
//Write an if statement that checks to see if the length of the cardsInPlay array is 2
if (cardsInPlay.length === 2) {
// if...else statement that checks for equality between the two cards in the cardsInPlay array.
//For the condition, check to see if the first card in the cardsInPlay array (cardsInPlay[0]) is equal to the second card in the cardsInPlay array.
if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
	} else {
     alert("Sorry, try again");
	}
}








