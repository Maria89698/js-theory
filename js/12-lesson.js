console.log(document);
const listEl = document.querySelector('.site-nav');
console.log(listEl);

const itemsEl = listEl.children;
console.log(listEl.firstChild);

console.log(itemsEl);


// Створюємо заголовок

const containerEl = document.querySelector('body');

const titleEl = document.createElement('h1');
titleEl.textContent = 'Привіт, це перший мій створений елемент';
titleEl.classList.add('title');
titleEl.style.backgroundColor = 'tomato';
console.log(titleEl);

containerEl.appendChild(titleEl);