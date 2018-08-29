var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

function shuffle(cards) {
  for (var i = 0; i < cards.length - 1; i++) {
    var j = i + Math.floor(Math.random() * (cards.length - i));
    var temp = cards[j];
    cards[j] = cards[i];
    cards[i] = temp;
  }
  return cards;
}
shuffle(cards)

var cardsInPlay = []; //fixed the name here
var checkForMatch = function () {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      //setTimeout so the alert waits 500 milliseconds before showing
      window.setTimeout(function () {
        alert("You found a match!");
      }, 500);
    } else {
      //setTimeout so the alert waits 500 milliseconds before showing
      window.setTimeout(function () {
        alert("Sorry, try again.");
      }, 500);
        //Reset the board after both cards are turned
      pageReload()
    }
  }
}

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
console.log("User flipped" + cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);
console.log(cards[cardId].suit);
console.log(cards[cardId].cardImage);
		
this.setAttribute('src', cards[cardId].cardImage);

checkForMatch();	
	}

var createBoard = function() {
for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src', "images/back.png");
	cardElement.setAttribute('data.id', i);
	cardElement.addEventListener('click', flipCard);
	cardElement.setAttribute('data-id', i);
	document.getElementById("game-board").appendChild(cardElement);
	
 	}
}
createBoard();

//reloads the page which ends up starting the game over 
function pageReload() {
  window.setTimeout(function () {
    location.reload();
    document.reset();
    createBoard();
    document.getElementByclass("board").reset();
  }, 500);
}