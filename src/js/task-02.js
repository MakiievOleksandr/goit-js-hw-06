const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const myFunction = (array) => {
  const newArray = [];

  array.map((item) => {
    const listItemEl = document.createElement('li');
    listItemEl.classList.add('item');

    const listTextEl = document.createElement('p');
    listTextEl.textContent = item;

    newArray.push(listItemEl.appendChild(listTextEl));
  });

  return newArray;
};

const ingredientListEl = document.querySelector('#ingredients');

const appendingEl = (array, el, callback) => {
  el.append(...callback(array));
};

appendingEl(ingredients, ingredientListEl, myFunction);
