
//8 Create an array with the cards
 var cards = ["queen", "queen", "king", "king"];
 
//Create an array cardsInPlay, Set its value to an empty array []
var cardsInPlay = [];


//9.1create a function to store all steps that should happen when the user flips a card.

var checkForMatch = function() {

if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
	} else {
     alert("Sorry, try again");
	}
};


var flipCard = function (cardId){
	//9 The message that is logged in the console should read
	console.log("User flipped" + cards[cardId]);
cardsInPlay.push(cards[cardId]);
 

//8 Create a variable cardOne 
//8Store the first item in the cards array in the variable cardOne
//8Use the array name, square brackets, and the index number to 
//9var cardOne = cards[0]; 

//8Use the push() method to add cardOne to the end of the cardsInPlay array.
//cardsInPlay.push(cardOne);


//8Use console.log() to display the card that the user flipped
//The message that is displayed in the console should say "User flipped queen".
//console.log("User flipped" + cardOne);

//8Create a variable cardTwo.
//Store the third item in the cards array in the variable cardTwo.
 //var cardTwo = cards[2];

//8Use the push() method to add cardTwo to the end of the cardsInPlay array.
 //cardsInPlay.push(cardTwo);

 
//8Use console.log() to display the card that the user flipped
//8The message that is displayed in the console should say "User flipped king".
//console.log("User flipped " + cardTwo);

//8ADD LOGIC
//8Write an if statement that checks to see if the length of the cardsInPlay array is 2
if (cardsInPlay.length === 2) {
//8if...else statement that checks for equality between the two cards in the cardsInPlay array.
//8 For the condition, check to see if the first card in the cardsInPlay array (cardsInPlay[0]) is equal to the second card in the cardsInPlay array.

checkForMatch();
}

};


flipCard(0);
flipCard(2);







