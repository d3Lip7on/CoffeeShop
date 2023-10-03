const burger = document.querySelector('.burger');
const lists = document.querySelectorAll('.header-menu-list');
const menus = document.querySelectorAll('.header-menu');

burger.addEventListener('click', () => {
	for (const list of lists) {
		list.classList.toggle('header-menu-list_collapsed');
	}

	for (const menu of menus) {
		menu.classList.toggle('header-menu_collapsed');
	}

	burger.classList.toggle('burger_rotated');
});
