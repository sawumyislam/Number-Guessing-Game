"use strict";
// question
// how pig game works
// how number guessing works
// how to generate numbers
//  how to match the number
// is their is any limitation or range of number

// Answer
/*
    1. Pig game works by gessing the number . by that gussing score was set when you can guess the game at first try or at second try. Point will reduce based on number of try
    2. first we have to generate range of number as guess vlaue lets set range of number (1-20)
    3. need a user input to compare with the generated number to guess
    4. need to set what whould be the meximum score score
    5. then calculate the score 
    6. once someone score highest score that will kept until them game is end
*/
let message = document.querySelector(".message");

// Generate random number
let generatedNum = Math.trunc(Math.random() * 20 + 1);

// document.querySelector(".number").textContent = generatedNum;

// Score
let score = 20;
const scoreSelector = document.querySelector(".score");

// Highest socre
let highest = 0;

// function for compare value and pass message
function guessTheNumber(num) {
  if (num === generatedNum) {
    message.textContent = "Correct Number!";
    // passed the write number into question mark
    document.querySelector(".number").textContent = num;
    // backgournd color change
    document.querySelector("body").style.backgroundColor = "#60b348";
    // set highest score
    if (score > highest) {
      highest = score;
      document.querySelector(".highscore").textContent = highest;
    }
  } else if (num !== generatedNum) {
    if (score > 0) {
      message.textContent =
        num > generatedNum ? "Number is too high!" : "Number is too low!";
      score--;
      scoreSelector.textContent = score;
    } else {
      message.textContent = "You lost the game!";
    }
  }

  return message;
}

// Button action
document.querySelector(".check").addEventListener("click", function () {
  //  taken value from input field and pass into guessTHenumber function
  let guessInput = Number(document.querySelector(".guess").value);
  guessTheNumber(guessInput);
});

// Reset Button action
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  scoreSelector.textContent = score;
  generatedNum = Math.trunc(Math.random() * 20 + 1);
  message.textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  // message.
});
