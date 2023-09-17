"use strict";

const $ = jQuery;


function eventHandler() {

	JSCCommon.init()


	// function whenResize() {
	// 	JSCCommon.setFixedNav();
	// }

	// window.addEventListener('scroll', () => {
	// 	JSCCommon.setFixedNav();

	// }, { passive: true })
	// window.addEventListener('resize', () => {
	// 	whenResize();
	// }, { passive: true });

	// whenResize();

	let defSwipers = document.querySelectorAll('.def-swiper-js');
	for (const defSwiper of defSwipers) {
		new Swiper(defSwiper, {
			slidesPerView: 'auto',
			loop: true,
			pagination: {
				el: ' .swiper-pagination',
				type: 'bullets',
				clickable: true,
			},
		});
	}

};
if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }