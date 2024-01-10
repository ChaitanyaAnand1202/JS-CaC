let target = Math.floor(Math.random() * 100 + 1);
const guessField = document.querySelector("#guessField");
const subButton = document.querySelector("#subt");
const prevGuessField = document.querySelector(".guesses");
const remGuessField = document.querySelector(".lastResult");
const resultField = document.querySelector(".lowOrHi");

let prevGuess = [];
let remGuess = 10;
let palyGame = true;

subButton.addEventListener("click", (e) => {
  e.preventDefault();
  const guessNum = parseInt(guessField.value);

  if (remGuess > 1) {
    if (validate(guessNum)) {
      checkGuess(guessNum);
      console.log(guessNum);
    }
  } else {
    if(validate(guessNum)){
      console.log(guessNum === target);
      if(guessNum === target){
        displayMessage(`Congratulations! The number was ${target}`);
      }
      else {
        displayMessage(`Sorry, the number was ${target}`);
      }
    }
    remGuess--;
    remGuessField.innerText = `${remGuess}`
    endGame();
  }
});

function validate(guess) {
  if (isNaN(guess) || guess === "") {
    displayMessage("Please enter a proper number");
    guessField.value = ''
  } else if (guess < 1) {
    displayMessage("please enter a number greater than 0");
    guessField.value = ''
  } else if (guess > 100) {
    displayMessage("please enter a number less than 100");
    guessField.value = ''
  } else {
    return true;
  }
}

function checkGuess(guess) {
  if (guess < target) {
    displayMessage("Your guess is too low");
    updateDetails(guess);
  } else if (guess > target) {
    displayMessage("Your guess is too high");
    updateDetails(guess);
  } else {
    displayMessage(`Congratulations! The number was ${target}`);
    endGame();
  }
}

function updateDetails(guess) {
  prevGuess.push(guess);
  remGuess--;
  prevGuessField.innerText += ` ${guess} `
  remGuessField.innerText = `${remGuess}`
  guessField.value = ''
}

function displayMessage(message) {
  resultField.innerText = `${message}`;
}

function endGame() {
  palyGame = false
  guessField.setAttribute('disabled', '')
  subButton.setAttribute('disabled', '')
  const restart = document.createElement('div')
  restart.innerText = "Restart Game"
  restart.setAttribute('id', 'restart')
  wrapper.appendChild(restart)
  restart.addEventListener('click',() => startGame())
}


function startGame() {
  wrapper.removeChild(document.querySelector('#restart'))
  guessField.removeAttribute('disabled')
  subButton.removeAttribute('disabled')
  target = Math.floor(Math.random() * 100 + 1);
  palyGame = true
  remGuess = 10
  prevGuess = []
  prevGuessField.innerText = `${prevGuess}`;
  remGuessField.innerText = `${remGuess}`;
  resultField.innerText = ''
  guessField.value = ''
}

// console.log(guess.value);
