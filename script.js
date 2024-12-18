const numberInput = document.getElementById("number-input");
const guessButton = document.getElementById("btn-guess");
const message = document.getElementById("message");
const restartBtn = document.getElementById("restart-game");
let attemptsLeftDisplay = document.getElementById("attempts-left");
let userNumberInput = "";
let attemptsLeft = 5;

let secretNumber = Math.floor(Math.random() * 100) + 1;
console.log(`secret number: ${secretNumber}`);
restartBtn.disabled = true;
guessButton.addEventListener("click", () => {
  userNumberInput = parseInt(numberInput.value);
  if (isNaN(userNumberInput) || userNumberInput < 0 || userNumberInput > 100) {
    alert("please guess a number 0 - 100");
    return;
  }

  attemptsLeft--;
  attemptsLeftDisplay.textContent = `You have ${attemptsLeft} ${
    attemptsLeft === 1 ? "Time" : "Times"
  }`;
  if (attemptsLeft === 0) {
    endGame();
    message.textContent = `Game Over, The correct number was ${secretNumber}.`;
    return;
  }

  if (userNumberInput === secretNumber) {
    message.textContent = "correct";
    endGame();
  } else if (userNumberInput < secretNumber) {
    message.textContent = "too low";
  } else {
    message.textContent = "too high";
  }
});

function endGame() {
  guessButton.disabled = true;
  numberInput.disabled = true;
  restartBtn.disabled = false;
}

restartBtn.addEventListener("click", () => {
  attemptsLeft = 5;
  attemptsLeftDisplay.textContent = `You have ${attemptsLeft} Times`;
  console.log("attemptsLeft " + attemptsLeft);
  secretNumber = Math.floor(Math.random() * 100) + 1;
  console.log("secretNumber 2 " + secretNumber);
  guessButton.disabled = false;
  numberInput.disabled = false;

  numberInput.value = "";
  message.textContent = "Guess a Number";
});

// tạo phần ghi số lần đoán còn lại ; attemptsLeft
// tạo biến số lần đoán ;
// tạo nút restart để bắt đầu lại game
