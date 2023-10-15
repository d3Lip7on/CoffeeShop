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
const numberOfPeople = document.querySelector('.testimonial__number-of-people');
const indicator = document.querySelector('.testimonial__indicator');

// Rects
const testimonialCardsContainerRect = testimonialCardsContainer.getBoundingClientRect();
console.log(testimonialCardsContainerRect.width);
// const containerWidth = testimonialCardsContainerRect.width;
const testimonialWindowRect = testimonialWindow.getBoundingClientRect();

let containerPosition = 0;

// Gap definition
let gap = getComputedStyle(testimonialCardsContainer).gap;

if (gap.includes('%')) {
	gap = parseInt((parseFloat(gap.slice(0, -1)) * testimonialWindowRect.width) / 100);
} else {
	let index = gap.indexOf('px');
	gap = parseInt(gap.slice(0, index));
}

btnRight.addEventListener('click', () => {
	console.log();
	if (testimonialCardsContainer.clientWidth == -containerPosition) return;
	containerPosition = containerPosition - testimonialWindowRect.width - gap;
	testimonialCardsContainer.style.left = containerPosition + 'px';
	console.log(containerPosition);
});

btnLeft.addEventListener('click', () => {
	if (parseInt(containerPosition) == 0) return;
	containerPosition = containerPosition + testimonialWindowRect.width + gap;
	testimonialCardsContainer.style.left = containerPosition + 'px';
});
