// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

//     Розміри найпершого <div> - 30px на 30px.
//     Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
//     Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesContainer = document.querySelector('#boxes');
const step = 10;
const minValue = 1;
const maxValue = 100;

function createBoxes(amount) {
  boxesContainer.innerHTML = '';
  let boxesHTML = '';

  for (let i = 0; i < amount; i += 1) {
    const size = 30 + step * i;
    const backgroundColor = getRandomHexColor();
    boxesHTML += `<div style="width: ${size}px; height: ${size}px; background-color: ${backgroundColor};"></div>`;
  }

  boxesContainer.insertAdjacentHTML('beforeend', boxesHTML);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
  inputEl.value = '0';
}

const inputEl = document.querySelector("#controls input[type='number']");
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

createBtn.addEventListener('click', clickHandle);

function clickHandle() {
  const inputValue = inputEl.value;
  if (inputValue >= minValue && inputValue <= maxValue) {
    createBoxes(inputValue);
  } else {
    alert('Please enter a number between 1 and 100.');
  }
}

destroyBtn.addEventListener('click', destroyBoxes);
