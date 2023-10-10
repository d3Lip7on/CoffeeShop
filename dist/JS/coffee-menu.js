const button = document.querySelector('.coffee-menu__button');
const coffeeItems = document.querySelectorAll('.coffee-item');

button.addEventListener('click', () => {
	for (const item of coffeeItems) {
		item.classList.add('coffee-item_active');
	}
	button.classList.add('coffee-menu__button_hidden');
});
