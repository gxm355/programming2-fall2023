let userCardSpace1 = document.getElementById("userCard1");
let userCardSpace2 = document.getElementById("userCard2");
let userCardSpace3 = document.getElementById("userCard3");
let userCardSpace4 = document.getElementById("userCard4");
let dealerCardSpace1 = document.getElementById("dealerCard1");
let dealerCardSpace2 = document.getElementById("dealerCard2");
let dealerCardSpace3 = document.getElementById("dealerCard3");
let dealerCardSpace4 = document.getElementById("dealerCard4");
let dealerScoreElement = document.getElementById("dealerScore");
let userScoreElement = document.getElementById("userScore");
let hitButton = document.getElementById("hit");
let standButton = document.getElementById("stand");
let resetButton = document.getElementById("reset");
let messageElement = document.getElementById("message");
let dealerGamesWonElement = document.getElementById("dealer-games-won");
let userGamesWonElement = document.getElementById("user-games-won");

let dealerGamesWon = 0;
let userGamesWon = 0;
let userScore = 0;
let dealerScore = 0;
let cardDeck = [];
let userCards = [];
let dealerCards = [];

let cardScoreValues = {
    '2H': 2, '3H': 3, '4H': 4, '5H': 5, '6H': 6, '7H': 7, '8H': 8, '9H': 9, '10H': 10, 'JH': 10, 'QH': 10, 'KH': 10, 'AH': 11,
    '2D': 2, '3D': 3, '4D': 4, '5D': 5, '6D': 6, '7D': 7, '8D': 8, '9D': 9, '10D': 10, 'JD': 10, 'QD': 10, 'KD': 10, 'AD': 11,
    '2C': 2, '3C': 3, '4C': 4, '5C': 5, '6C': 6, '7C': 7, '8C': 8, '9C': 9, '10C': 10, 'JC': 10, 'QC': 10, 'KC': 10, 'AC': 11,
    '2S': 2, '3S': 3, '4S': 4, '5S': 5, '6S': 6, '7S': 7, '8S': 8, '9S': 9, '10S': 10, 'JS': 10, 'QS': 10, 'KS': 10, 'AS': 11,
};

function drawCard(cardList) {
    let randomNum = Math.floor(Math.random() * cardList.length);
    const drawnCard = cardList.splice(randomNum, 1)[0];
    return drawnCard;
}

function reset() {
    userScore = 0;
    dealerScore = 0;
    cardDeck = [];
    userCards = [];
    dealerCards = [];	

    messageElement.innerText = "Your turn";

    cardDeck = ['AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC', 
                'AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH', 
                'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD', 
                'AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS'];

    let userCard1 = drawCard(cardDeck);
    let userCard2 = drawCard(cardDeck);
    userCards.push(userCard1, userCard2);

    let dealerCard1 = drawCard(cardDeck);
    let dealerCard2 = drawCard(cardDeck);
    dealerCards.push(dealerCard1, dealerCard2);

    dealerCardSpace1.src = "images/back.png"
    dealerCardSpace2.src = "images/" + dealerCard2 + ".svg";
    userCardSpace1.src = "images/" + userCard1 + ".svg";
    userCardSpace2.src = "images/" + userCard2 + ".svg";

    // Reset user's third and fourth card images to the initial state
    userCardSpace3.src = "images/back.png";
    userCardSpace4.src = "images/back.png";

    // Reset dealer's third and fourth card images to the initial state
    dealerCardSpace3.src = "images/back.png";
    dealerCardSpace4.src = "images/back.png";

    dealerScore = cardScoreValues[dealerCard1] + cardScoreValues[dealerCard2];
    userScore = cardScoreValues[userCard1] + cardScoreValues[userCard2];

    dealerScoreElement.innerText = "?";
    userScoreElement.innerText = userScore;

    hitButton.disabled = false;
    standButton.disabled = false;
}


function hit() {
    if (userCards.length < 4) {
        let newCard = drawCard(cardDeck);
        userCards.push(newCard);
        userScore += cardScoreValues[newCard];

        let userCardSpace = document.getElementById("userCard" + userCards.length);
        userCardSpace.src = "images/" + newCard + ".svg";

        userScoreElement.innerText = userScore;

        if (userScore > 21) {
            endGame("You Lose!");
        }
    }
}

function stand() {
    dealerCardSpace1.src = "images/" + dealerCards[0] + ".svg";
    dealerScoreElement.innerText = dealerScore;

    function dealerDraws() {
        while (dealerScore < 17) {
            let dealerNewCard = drawCard(cardDeck);
            dealerCards.push(dealerNewCard);
            dealerScore += cardScoreValues[dealerNewCard];

            let dealerCardSpace = document.getElementById("dealerCard" + dealerCards.length);
            dealerCardSpace.src = "images/" + dealerNewCard + ".svg";
        }

        determineOutcome();
    }

    setTimeout(dealerDraws, 1000); // Delay for 1 second before dealer draws
}


// did this because it didn't work inside stand function right
function determineOutcome() { 
    dealerScoreElement.innerText = dealerScore;

    if (userScore <= 21 && dealerScore <= 21) {
        if (userScore > dealerScore) {
            endGame("You Win!");
        } else if (userScore < dealerScore) {
            endGame("You Lose!");
        } else {
            endGame("It's a Tie!");
        }
    } else if (userScore <= 21 && dealerScore > 21) {
        endGame("You Win!");
    } else {
        endGame("You Lose!");
    }
}

function endGame(message) {
    messageElement.innerText = message;
    if (message.includes("Win")) {
        userGamesWon++;
    } else if (message.includes("Lose")) {
        dealerGamesWon++;
    }

    hitButton.disabled = true;
    standButton.disabled = true;

    dealerGamesWonElement.innerText = dealerGamesWon;
    userGamesWonElement.innerText = userGamesWon;
}

