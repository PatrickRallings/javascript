const hands = ['rock' , 'paper', 'scissors'];

function getHand () {
    n = parseInt(Math.random()*10)%3;
    return hands[n];
    }
console.log(getHand())
Player1 = {
    name: "Ya boi",
    hand: getHand(),
};
Player2 = {
    name: "Bill Nye",
    hand: getHand(),
};
function playRound(player1, player2) {
    let hand1 = player1.hand
    let hand2 = player2.hand
    
    if ((hand1 === 'rock' && hand2 === 'scissors')||(hand1 === 'paper' && hand2 === 'rock')||(hand1 === 'scissors' && hand2 === 'paper')) {
        console.log(player1.name+' played '+hand1+' and '+player2.name+' played '+hand2+'. '+player1.name+' wins!')
        return player1;
    }
    else if ((hand2 === 'rock' && hand1 === 'scissors')||(hand2 === 'paper' && hand1 === 'rock')||(hand2 === 'scissors' && hand1 === 'paper')) {
        console.log(player1.name+' played '+hand1+' and '+player2.name+' played '+hand2+'. '+player2.name+' wins!')
        return player2;
    }
    else {
        console.log(player1.name+' and '+player2.name+' tied.')
        return null;
    }
}
let player1Wins = 0;
let player2Wins = 0;
function playGame (Player1, Player2, playUntil) {
    let Player1Score = 0;
    let Player2Score = 0;
    while (Player1Score < playUntil && Player2Score < playUntil) {
        if (!playRound(Player1, Player2)) {
        } else if (playRound(Player1, Player2) === Player1) {
            Player1Score++;
            return `${Player1Score} - ${Player2Score}`;
        } else {
            Player2Score++;
            return `${Player1Score} - ${Player2Score}`;
        }
    if (Player1Score === playUntil) {
        return `${Player1.name} is the winner!`
    } else if (Player2Score === playUntil) {
        return `${Player2.name} is the winner!`
    }
    }
}
console.log(playGame(Player1, Player2, 5));