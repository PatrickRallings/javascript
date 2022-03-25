let hands = ['rock', 'paper', 'scissors']

function getHand () {
    return (parseInt(Math.random()*10)%3)
}

const player1 = {
    name: 'Toby',
    hand: getHand
}
const player2 = {
    name: 'Maguire',
    hand: getHand
}

function playRound () {
    let player1Hand = hands[player1.hand()]
    let player2Hand = hands[player2.hand()]
    if (
        (player1Hand === "rock" && player2Hand === "scissors") ||
        (player1Hand === "paper" && player2Hand === "rock") ||
        (player1Hand === "scissors" && player2Hand === "paper")
      ) {
        console.log(
          player1.name +
            " played " +
            player1Hand +
            " and " +
            player2.name +
            " played " +
            player2Hand +
            ". " +
            player1.name +
            " wins!"
        );
        return player1;
      } else if (
        (player2Hand === "rock" && player1Hand === "scissors") ||
        (player2Hand === "paper" && player1Hand === "rock") ||
        (player2Hand === "scissors" && player1Hand === "paper")
      ) {
        console.log(
          player1.name +
            " played " +
            player1Hand +
            " and " +
            player2.name +
            " played " +
            player2Hand +
            ". " +
            player2.name +
            " wins!"
        );
        return player2;
      } else {
        console.log(
          player1.name +
            " and " +
            player2.name +
            " tied by both playing " +
            player1Hand +
            "."
        );
        return null;
      }
}
let player1WinCount = 0;
let player2WinCount = 0;

function playGame(player1, player2, playUntil) {
    if (player1WinCount === playUntil || player2WinCount === playUntil) {
        if (player1WinCount === playUntil) {
            console.log(player1.name+' has won the game!')
            return player1.name
        }
        if (player2WinCount === playUntil) {
            console.log(player2.name+' has won the game!')
            return player2.name
        }
    }
    else {
        if (playRound()==player1) {
            player1WinCount+=1
            playGame(player1, player2, playUntil)
        }
        if(playRound()==player2) {
            player2WinCount+=1
            playGame(player1, player2, playUntil)
        }
    }
}
playGame(player1, player2, 5)