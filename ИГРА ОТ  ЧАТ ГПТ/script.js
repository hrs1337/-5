document.addEventListener('DOMContentLoaded', function () {
    const guessInput = document.getElementById('guess-input');
    const guessButton = document.getElementById('guess-button');
    const message = document.getElementById('message');
    const numberToGuess = Math.floor(Math.random() * 100) + 1;

    guessButton.addEventListener('click', function () {
        const userGuess = parseInt(guessInput.value);
        if (isNaN(userGuess)) {
            message.textContent = "Введите корректное число!";
        } else if (userGuess < numberToGuess) {
            message.textContent = "Больше!";
        } else if (userGuess > numberToGuess) {
            message.textContent = "Меньше!";
        } else {
            message.textContent = "Поздравляем! Вы угадали число!";
            // Уведомим Telegram о завершении игры
            window.Telegram.WebApp.close();
        }
    });
});
