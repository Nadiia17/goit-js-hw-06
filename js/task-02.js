// Напиши скрипт, який для кожного елемента масиву ingredients:

//     Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//     Додасть назву інгредієнта як його текстовий вміст.
//     Додасть елементу клас item.
//     Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridientsArray = ingredients.map(ingridient => {
  const liIngr = document.createElement('li');
  liIngr.className = 'item';
  liIngr.textContent = ingridient;
  return liIngr;
});

const categoriesList = document.querySelector('#ingredients');
categoriesList.prepend(...ingridientsArray);
