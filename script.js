'use strict';
'use strict';
/*
console.log(document.querySelector(".message").textContent);
document.querySelector('.message').textContent = "Correct Number"

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1; // forming random values from 1 to 20
let score = 20; // this is a state variable, cos it is part of the application state,
//it is bette for the data to be in the code not just the Dom
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message; // it is set to the
  // message that is passed into the function
};

document.querySelector('.check').addEventListener('click', function () {
  // this defines the action
  //that should take place when the click button is clicked
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // if it is not a number
    // document.querySelector('.message').textContent = '⛔No number!';
    displayMessage('⛔No number!');
  } else if (guess === secretNumber) {
    // when player wins
    // document.querySelector('.message').textContent = '🎉Correct Number';
    displayMessage('🎉Correct Number');
    document.querySelector('.number').textContent = secretNumber; //this hides the
    //secret number behind the box while in the functtion

    // to set the high score
    //  document.querySelector('.highscore').textContent = score; //my  code to write
    //note, both code works, but I'll be using jonas code
    if (score > highscore) {
      // jonas code

      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // end of high score

    document.querySelector('body').style.backgroundColor = '#60b347';
    // property names with multiple words adopt camel case style
    document.querySelector('.number').style.width = '30rem';
    /*  *to increase width when player guesses right,
     *Whenever we are reassigning a value, we need to specify it inside a string
     *body on line 31 did not have a . cos it is not a class name
     */

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ?  '📉Too high' : 'Too low';

      displayMessage(guess > secretNumber ? '📉Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // else if score less than 1, which is, if score  is zero
      // document.querySelector('.message').textContent = '💥you lost the game';
      displayMessage('💥you lost the game');
      document.querySelector('.score').textContent = 0;
    }
    // when guess is tooo high
  }

  /*else if (guess > secretNumber) {
    
    if (score > 1) {
      document.querySelector('.message').textContent = '📉Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // else if it is 0
      document.querySelector('.message').textContent = '💥you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    // when guess is too low
    if (score > 1) {
      document.querySelector('.message').textContent = '📉Too low';
      score--;
      document.querySelector('.score').textContent = score;
    // } else {
      document.querySelector('.message').textContent = '💥you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } // chisom helped me, sugar mummy concerned

*/
});

// // making the again button  reset the game score and color
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('body').style.backgroundColor = '#222'; // reset the background to ash
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('startGuessing');
  document.querySelector('.number').style.width = '30rem';
});
