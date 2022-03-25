const hands = ['rock' , 'paper', 'scissors'];
Player1 = {
    name: "Ya boi",
    hand: getHand(),
};
Player2 = {
    name: "Bill Nye",
    hand: getHand(),
};
function getHand () {
    n = parseInt(Math.random()*10)%3;
    if (n == 0) {
        return hands[0];
    } else if (n == 1) {
        return hands[1];
    } else if (n == 2) {
        return hands[2];
    }
}
function playRound() {
    console.log(Player1.name, 'plays', Player1.hand);
    console.log(Player2.name, 'plays', Player2.hand);
    if (Player1.hand === Player2.hand) {
        console.log('It is a tie!');
    } else if (Player1.hand === hands[0]) {
        if (Player2.hand === hands[2]) {
            console.log(`${Player1.name} wins!`);
            return `${Player1Score} - ${Player2Score}`
        } else {
            console.log(`${Player2.name} wins!`);
            return `${Player1Score} - ${Player2Score}`;
        }
    } else if (Player1.hand === hands[0]) {
        if (Player2.hand === hands[1]) {
            console.log(`${Player2.name} wins!`);
            return `${Player1Score} - ${Player2Score}`;
        } else {
            console.log(`${Player1.name} wins!`);
            return `${Player1Score} - ${Player2Score}`;
        }
    } else if (Player1.hand === hands[1]) {
        if (Player2.hand === hands[2]) {
            console.log(`${Player1.name} wins!`);
            return `${Player1Score} - ${Player2Score}`;
        } else {
            console.log(`${Player2.name} wins!`);
            return `${Player1Score} - ${Player2Score}`;
        }
    } else if (Player1.hand === hands[2]) {
        if (Player2.hand === hands[0]) {
            console.log(`${Player2.name} wins!`);
            return `${Player1Score} - ${Player2Score}`;
        } else {
            console.log(`${Player1.name} wins!`);
            return `${Player1Score} - ${Player2Score}`;
        }
    }
}
function PlayerWinner (player, playUntil) {
    return player.score >= playUntil;
}
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