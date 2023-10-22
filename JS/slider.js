'use strict';

const sliders = document.querySelectorAll('.slider');
for (let slider of sliders) {
	// Components
	const sliderWindow = slider.querySelector('.slider__window');
	const slides = slider.querySelector('.slides');
	const slide = slider.querySelectorAll('.slide');

	// Creation of indicators block
	const indicatorBlock = document.createElement('div');
	indicatorBlock.classList.add('slider__indicators');
	slider.append(indicatorBlock);

	// Indicators creation
	slide.forEach(() => {
		let newIndicator = document.createElement('div');
		newIndicator.classList.add('slider__indicator');
		indicatorBlock.append(newIndicator);
	});

	const indicators = slider.querySelectorAll('.slider__indicator');
	indicators[0].classList.add('slider__indicator_active');

	let indexOfActiveIndicator = 0;
	const rectSliderWindow = sliderWindow.getBoundingClientRect();

	let initialPoint = 0;
	let currentSlidesPoint = 0;
	let isMousePressed = false;

	let mouseX;

	sliderWindow.addEventListener('touchstart', (event) => {
		event.preventDefault();
		slides.style.transition = 'none';
		isMousePressed = true;
		initialPoint = event.touches[0].clientX - rectSliderWindow.left;
	});

	slider.addEventListener('touchend', (event) => {
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
		slides.style.transition = 'left 200ms';
		slides.style.left = currentSlidesPoint + 'px';
	});

	slider.addEventListener('touchmove', (event) => {
		event.preventDefault();
		if (!isMousePressed) return;
		mouseX = event.touches[0].clientX - rectSliderWindow.left;
		slides.style.left = currentSlidesPoint + mouseX - initialPoint + 'px';
	});
}
