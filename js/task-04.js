// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

//     Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
//     Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
//     Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;
let currentValue = document.querySelector('#value');

const decrementBtn = document.querySelector('button[data-action="decrement"]');
decrementBtn.addEventListener('click', decrement);
function decrement(event) {
  counterValue -= 1;
  currentValue.textContent = counterValue;
}

const incrementBtn = document.querySelector('button[data-action="increment"]');
incrementBtn.addEventListener('click', increment);
function increment(event) {
  counterValue += 1;
  currentValue.textContent = counterValue;
}
