// ================== Variables ===================

let min = 1;
let max = 10;
let guessLeft = 3;
let winNum = Math.floor(Math.random() * (max - min + 1)) + min;

// ================== Select DOM ===================

let game = document.querySelector(".game");
let minNum = document.querySelector(".min-num");
let maxNum = document.querySelector(".max-num");
let guessInput = document.querySelector(".guess-input");
let guessBtn = document.querySelector(".guess-btn");
let message = document.querySelector(".message");

// ================= Event Listeners ================

guessBtn.addEventListener("click", () => {
  let guess = parseInt(guessInput.value);
  // Validation
  if (isNaN(guess) || guess < min || guess > 10 || guess === "") {
    guessInput.style.borderColor = "red";
    showMessage("Please enter a number between min and max 😊", "red");
  } else if (guess === winNum) {
    playAgain(`${winNum} is correct ! You win 🎉`, "green");
  } else {
    guessLeft--;
    if (guessLeft === 0) {
      playAgain(`Game over , you lose ! The correct number was ${winNum} 👀`, "red");
    } else {
      showMessage(`${guess} is not correct , you can ${guessLeft} times guessing 🙂`, "red  ");
    }
  }
  guessInput.value = "";
});

game.addEventListener("mousedown", (e) => {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

// ================= Functions ==================

let showMessage = (msg, color) => {
  message.textContent = msg;
  message.style.color = color;
};

let playAgain = (msg, color) => {
  guessInput.style.borderColor = color;
  guessInput.disabled = true;
  showMessage(msg, color);
  guessBtn.value = "Play Again";
  guessBtn.className = "play-again";
};
