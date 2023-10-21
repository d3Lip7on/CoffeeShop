'use strict';

// Buttons
const btnLeft = document.querySelector('.testimonial__btn-left');
const btnRight = document.querySelector('.testimonial__btn-right');

// Cards
const testimonialCardsContainer = document.querySelector('.testimonial-cards');

const testimonialCards = document.querySelectorAll('.testimonial-card');

// window
const testimonialWindow = document.querySelector('.testimonial__window');

// Indicator
const numberOfPeople = document.querySelector('.testimonial__current-number');
const indicator = document.querySelector('.testimonial__indicator');
const activePart = document.querySelector('.testimonial__indicator > span');

// Rects
const testimonialCardsContainerRect = testimonialCardsContainer.getBoundingClientRect();
const testimonialWindowRect = testimonialWindow.getBoundingClientRect();

// Gap definition
let gap = getComputedStyle(testimonialCardsContainer).gap;

if (gap.includes('%')) {
	gap = parseInt((parseFloat(gap.slice(0, -1)) * testimonialWindowRect.width) / 100);
} else {
	let index = gap.indexOf('px');
	gap = parseInt(gap.slice(0, index));
}
// Variables
let containerPosition = 0;
let cardWidth = testimonialCards[0].clientWidth;
let containerWidth = cardWidth * testimonialCards.length + gap * (testimonialCards.length - 1);

let addedCards = 0;
if (window.innerWidth > 1000) {
	addedCards = 2;
	numberOfPeople.textContent = '2';
} else {
	addedCards = 1;
	numberOfPeople.textContent = '1';
}
activePart.style.width = (+numberOfPeople.textContent / 6) * 100 + '%';

btnRight.addEventListener('click', (event) => {
	event.preventDefault();
	containerPosition = containerPosition - testimonialWindowRect.width - gap;
	if (-containerPosition >= containerWidth - 10) {
		containerPosition = containerPosition + testimonialWindowRect.width + gap;
		numberOfPeople.textContent = +numberOfPeople.textContent - addedCards;
	}
	testimonialCardsContainer.style.left = containerPosition + 'px';
	numberOfPeople.textContent = +numberOfPeople.textContent + addedCards;
	activePart.style.width = (+numberOfPeople.textContent / 6) * 100 + '%';
});

btnLeft.addEventListener('click', (event) => {
	event.preventDefault();
	if (parseInt(containerPosition) == 0) return;
	containerPosition = containerPosition + testimonialWindowRect.width + gap;
	testimonialCardsContainer.style.left = containerPosition + 'px';
	numberOfPeople.textContent = +numberOfPeople.textContent - addedCards;
	activePart.style.width = (+numberOfPeople.textContent / 6) * 100 + '%';
});
