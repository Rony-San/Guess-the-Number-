'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = ' Correct number 💋 ';
// ('use strict');
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// document.querySelector('.check').addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);

//   document.querySelector('.message').textContent = 'Correct number 🐱‍🐉';
// });

// document.querySelector('.check').addEventListener

let secretNumber = Math.ceil(Math.random() * 20);

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.ceil(Math.random() * 20);
    score = 20;
    document.querySelector('.score').textContent = score;
    displayMessage('Start guessing...');
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
  });
  //  WHEN THERE IS NO INPUT
  if (!guess) {
    displayMessage('Not number 🤦‍♂️');

    //  WHEN PLAYER WINS
  } else if (guess === secretNumber) {
    displayMessage('Correct Number 😜');
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // WHEN GUESS IS WRONG
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? ' TOO high 🐱‍🏍' : ' TOO low 🤢');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(' You lost the game 🐱😨');
      document.querySelector('.score').textContent = 0;
    }
  }
});
