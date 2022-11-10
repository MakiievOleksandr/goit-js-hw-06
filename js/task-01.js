let numberOfCategory = document.querySelectorAll('.item');
console.log('Number of categories: ', numberOfCategory.length);

const allCategories = document.querySelectorAll('.item');

allCategories.forEach((item) => {
  console.log('Category: ', item.querySelector('h2').textContent);
  console.log('Elements', item.querySelectorAll('li').length);
});
