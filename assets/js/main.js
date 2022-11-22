'use strict';

let userScoreOutput = document.querySelector(".user-score");
let compScoreOutput = document.querySelector(".comp-score");
let output = document.querySelector(".output");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let movesOutput = document.querySelector(".your-move");
let restartButton = document.querySelector("a");

let counterUser = 1;
let counterComp = 1;

// 0=stone, 1=paper , 2=scissors

rock.addEventListener('click', function rockButton() {
    console.log("rock");
    let x = Math.floor(Math.random() * 3);
    console.log(x);
    if (x == 0) {
        movesOutput.innerHTML = "Computer choose rock"
        output.innerHTML = "Draw! Try it again"
    } else if (x == 1){
        movesOutput.innerHTML = "Computer choose paper"
        compScoreOutput.innerHTML = counterComp++;
        output.innerHTML = "Stone wrapped paper. You loose";
    } else if (x == 2) {
        movesOutput.innerHTML = "Computer choose scissors"
        userScoreOutput.innerHTML = counterUser++;
        output.innerHTML = "Stone destroyed scissors, you win!";
    }
})

paper.addEventListener('click', function () {
    console.log("paper");
    let x = Math.floor(Math.random() * 3);
    console.log(x);
    if (x == 0) {
        movesOutput.innerHTML = "Computer choose rock"
        output.innerHTML = "Paper wrapping stone, you win!";
        userScoreOutput.innerHTML = counterUser++
    } else if (x == 1){
        movesOutput.innerHTML = "Computer choose paper"
        output.innerHTML = "Draw! Try it again"
    } else if (x == 2) {
        movesOutput.innerHTML = "Computer choose scissors"
        compScoreOutput.innerHTML = counterComp++
        output.innerHTML = "Paper get sliced by scissors, you loose"; 
    }
})

scissors.addEventListener('click', function () {
    console.log("scissors");
    let x = Math.floor(Math.random() * 3);
    console.log(x);
    if (x == 0) {
        movesOutput.innerHTML = "Computer choose rock"
        output.innerHTML = "Scissors looses against Rock. Try again";
        compScoreOutput.innerHTML = counterComp++;
    } else if (x == 1){
        movesOutput.innerHTML = "Computer choose paper"
        output.innerHTML = "Scissors cuts paper, you win!";
        userScoreOutput.innerHTML = counterUser++
    } else if (x == 2) {
        movesOutput.innerHTML = "Computer choose scissors"
        output.innerHTML = "Draw! Try it again";
    }
})

restartButton.addEventListener('click', function(event) {
    event.preventDefault();
    compScoreOutput.innerHTML = counterComp = 0;
    userScoreOutput.innerHTML = counterUser = 0;
    counterUser = 1
    counterComp = 1
    output.innerHTML = "choose your next move";
})
