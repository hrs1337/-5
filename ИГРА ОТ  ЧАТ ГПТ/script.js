// script.js
const player = document.getElementById("player");
const object = document.getElementById("object");
const scoreDisplay = document.getElementById("score");
const gameContainer = document.getElementById("game-container");

let playerPosition = gameContainer.clientWidth / 2 - player.clientWidth / 2;
let objectPositionX = Math.random() * (gameContainer.clientWidth - object.clientWidth);
let objectPositionY = -50;
let score = 0;
let gameInterval;

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        playerPosition -= 20;
        if (playerPosition < 0) playerPosition = 0;
        player.style.left = playerPosition + "px";
    } else if (event.key === "ArrowRight") {
        playerPosition += 20;
        if (playerPosition > gameContainer.clientWidth - player.clientWidth) {
            playerPosition = gameContainer.clientWidth - player.clientWidth;
        }
        player.style.left = playerPosition + "px";
    }
});

function startGame() {
    gameInterval = setInterval(updateGame, 20);
}

function updateGame() {
    objectPositionY += 5;
    if (objectPositionY > gameContainer.clientHeight) {
        resetObject();
    } else if (objectPositionY + object.clientHeight > gameContainer.clientHeight - player.clientHeight &&
               objectPositionX + object.clientWidth > playerPosition &&
               objectPositionX < playerPosition + player.clientWidth) {
        score++;
        scoreDisplay.textContent = "Score: " + score;
        resetObject();
    }

    object.style.top = objectPositionY + "px";
    object.style.left = objectPositionX + "px";
}

function resetObject() {
    objectPositionY = -50;
    objectPositionX = Math.random() * (gameContainer.clientWidth - object.clientWidth);
}

startGame();
