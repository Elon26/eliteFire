"use strict";

function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

//===============================================================;
const slider = new Swiper('.slider', {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 32,
    watchOverflow: true,
    speed: 800,
    loop: true,

    navigation: {
        nextEl: '.slider .slider__arrow_next',
        prevEl: '.slider .slider__arrow_prev',
    }
});

const infoSlider = new Swiper('.infoSlider', {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 60,
    watchOverflow: true,
    speed: 800,
    loop: true,

    navigation: {
        nextEl: '.infoSlider .infoSlider__arrow_next',
        prevEl: '.infoSlider .infoSlider__arrow_prev',
    },

    pagination: {
        el: '.infoSlider__dots',
        clickable: true,
    },
});

const infoWidth = document.querySelector('.author__infoWidth');
const range = document.getElementById('fireplaceWidth');

const changeValue = value => {
    const percentValue = ((value - 0.5) / 9.5) * 100;
    range.style.background = `-webkit-linear-gradient(left, #ffcf7a 0%, #ffcf7a ${percentValue}%, #646464 ${percentValue}%, #646464 100%)`;
    infoWidth.textContent = `${value} м`;
};

;
