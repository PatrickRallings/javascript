let hands = ['rock', 'paper', 'scissors']

function getHand () {
    // let x;
    // let handGiven;
    x = (parseInt(Math.random()*10)%3)
    y = (parseInt(Math.random()*10)%3)
    handGiven1 = hands[x]
    handGiven2 = hands[y]
    return
}

getHand()

const player1 = {
    name: 'Patrick',
    hand: handGiven1
}
const player2 = {
    name: 'notPatrick',
    hand: handGiven2
}

console.log(player1.hand)
console.log(player2.hand)
// const player1WinCount = 0;
// const player2WinCount = 0;

// function playRound () {
//     // console.log(player1.name+' played '+player1.hand+'.')
//     // console.log(player2.name+' played '+player2.hand+'.')
//     if (player1.hand==='rock' && player2.hand==='scissors') {
//         console.log(player1.name+' wins!')
//         player1WinCount+=1
//     }
//     if (player1.hand==='rock' && player2.hand==='paper') {
//         console.log(player2.name+' wins!')
//         player2WinCount+=1
//     }
//     if (player1.hand===player2.hand) {
//         console.log(player1.name+' and '+player2.name+' tied!')
//     }
//     if (player1.hand==='paper' && player2.hand==='scissors') {
//         console.log(player2.name+' wins!')
//         player2WinCount+=1
//     }
//     if (player1.hand==='paper' && player2.hand==='rock') {
//         console.log(player1.name+' wins!')
//         player1WinCount+=1
//     }
//     if (player1.hand==='scissors' && player2.hand==='rock') {
//         console.log(player2.name+' wins!')
//         player2WinCount+=1
//     }
//     if (player1.hand==='scissors' && player2.hand==='paper') {
//         console.log(player1.name+' wins!')
//         player1WinCount+=1
//     }
//     return
// }
// let playUntil = 5;

// function playGame (){
//     while (player1WinCount <= playUntil && player2WinCount <= playUntil) {
//         getHand
//         playRound()
//         // console.log(player1.name+' has '+player1WinCount+' wins so far.')
//         // console.log(player2.name+' has '+player2WinCount+' wins so far.')    
//     }
//     return
// }
// playGame()
