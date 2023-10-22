'use strict';

const burger = document.querySelector('.burger');
const lists = document.querySelectorAll('.header-menu-list');
const menus = document.querySelectorAll('.header-menu');

burger.addEventListener('click', () => {
	if (burger.classList.contains('burger_rotated')) {
		for (const list of lists) {
			list.classList.add('header-menu-list_closing');
			list.onanimationend = () => {
				list.classList.remove('header-menu-list_closing');
				list.classList.remove('header-menu-list_collapsed');
				for (const menu of menus) {
					menu.classList.remove('header-menu_collapsed');
				}
			};
		}
	} else {
		for (const menu of menus) {
			menu.classList.add('header-menu_collapsed');
		}
		for (const list of lists) {
			list.classList.add('header-menu-list_collapsed');
			list.classList.add('header-menu-list_opening');
			list.onanimationend = () => {
				list.classList.remove('header-menu-list_opening');
			};
		}
	}

	burger.classList.toggle('burger_rotated');
});
