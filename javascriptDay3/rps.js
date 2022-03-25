const hands = ['rock' , 'paper', 'scissors'];

function getHand() {
    return parseInt(Math.random()*10)%3
}
const player1 = {
    name: 'Toby', 
    getHands: getHand
}
const player2 = {
    name: 'Maguire',
    getHands: getHand
}

function playRound(player1, player2) {
    let hand1 = hands[player1.getHands()]
    let hand2 = hands[player2.getHands()]
    
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

function playGame(player1, player2, playUntil = 5) {
    let game = playRound(player1, player2) 
    if (game === player1) {
        player1Wins += 1;
        console.log(player1.name+"'s Score:"+player1Wins)
        console.log(player2.name+"'s Score:"+player2Wins)
    }
    else if (game === player2) {
        player2Wins += 1;
        console.log(player1.name+"'s Score:"+player1Wins)
        console.log(player2.name+"'s Score:"+player2Wins)
    }
    if (player1Wins === playUntil || player2Wins === playUntil) {
        return [game]
    }
    return playGame(player1, player2)
}
playGame(player1, player2)