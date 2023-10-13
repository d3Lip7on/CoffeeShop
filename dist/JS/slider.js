'use strict';

if (innerWidth <= 768) {
	const slider = document.querySelector('.slider');
	const sliderWindow = document.querySelector('.slider__window');
	const slides = document.querySelector('.slides');
	const slide = document.querySelectorAll('.slide');
	const indicatorBlock = document.querySelector('.slider__indicators');

	slide.forEach((slide) => {
		let newIndicator = document.createElement('div');
		newIndicator.classList.add('slider__indicator');
		indicatorBlock.append(newIndicator);
	});

	const indicators = document.querySelectorAll('.slider__indicator');

	indicators[0].classList.add('slider__indicator_active');
	let indexOfActiveIndicator = 0;

	sliderWindow.style.width = slide[0].clientWidth + 'px';
	slides.style.gap = 0;
	sliderWindow.style.overflow = 'hidden';

	const rectSliderWindow = sliderWindow.getBoundingClientRect();

	slides.style.position = 'relative';
	slides.style.left = 0;
	slides.style.top = 0;

	let initialPoint = 0;
	let currentSlidesPoint = 0;
	let isMousePressed = false;

	sliderWindow.addEventListener('mousedown', (event) => {
		event.preventDefault();
		isMousePressed = true;
		const mouseX = event.clientX;
		initialPoint = mouseX - rectSliderWindow.left;
	});

	slider.addEventListener('mouseup', (event) => {
		let mouseX = event.clientX - rectSliderWindow.left;
		if (mouseX - initialPoint < -sliderWindow.clientWidth / 2) {
			if (currentSlidesPoint != -sliderWindow.clientWidth * (slide.length - 1)) {
				currentSlidesPoint = currentSlidesPoint - sliderWindow.clientWidth;
				indicators[indexOfActiveIndicator].classList.remove('slider__indicator_active');
				indexOfActiveIndicator++;
				indicators[indexOfActiveIndicator].classList.add('slider__indicator_active');
			}
		}
		if (mouseX - initialPoint > sliderWindow.clientWidth / 2) {
			if (currentSlidesPoint != 0) {
				currentSlidesPoint = currentSlidesPoint + sliderWindow.clientWidth;
				indicators[indexOfActiveIndicator].classList.remove('slider__indicator_active');
				indexOfActiveIndicator--;
				indicators[indexOfActiveIndicator].classList.add('slider__indicator_active');
			}
		}
		isMousePressed = false;
		slides.style.left = currentSlidesPoint + 'px';
	});

	slider.addEventListener('mousemove', (event) => {
		if (!isMousePressed) return;
		let mouseX = event.clientX - rectSliderWindow.left;
		slides.style.left = currentSlidesPoint + mouseX - initialPoint + 'px';
	});
}
