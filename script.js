let clickCount = 0;

const image = document.getElementById('clickableImage');
const clickCountDisplay = document.getElementById('clickCount');

image.addEventListener('click', () => {
    clickCount++;
    clickCountDisplay.textContent = clickCount;

    // Добавляем класс для анимации
    image.classList.add('clicked');

    // Убираем класс через 200ms для повторной анимации
    setTimeout(() => {
        image.classList.remove('clicked');
    }, 200);
});
