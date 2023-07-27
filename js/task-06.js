// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

//     Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
//     Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.

// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputElement = document.querySelector('#validation-input');
const requiredLength = Number(inputElement.dataset.length);
console.log(requiredLength);

inputElement.addEventListener('blur', onBlurAction);

function onBlurAction(event) {
  const enteredTextLength = event.currentTarget.value.length;
  console.log(enteredTextLength);
  if (enteredTextLength === requiredLength) {
    inputElement.classList.add('valid');
    inputElement.classList.remove('invalid');
  } else {
    inputElement.classList.add('invalid');
    inputElement.classList.remove('valid');
  }
}
