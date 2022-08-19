const swiper = new Swiper(".swiper", {
	// Optional parameters,
	spaceBetween: 40,
	speed: 800,
	slidesPerView: 2,
	loop: true,
	watchSlidesVisibility: true,

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-btn__next",
		prevEl: ".swiper-btn__prev",
	},
	breakpoints: {
		1100: {
			slidesPerView: 2,
		},
		900: {
			slidesPerView: 1.9,
			spaceBetween: 38,
		},
		950: {
			slidesPerView: 1.8,
		},
		800: {
			slidesPerView: 1.7,
			spaceBetween: 36,
		},
		700: {
			slidesPerView: 1.5,
		},
		600: {
			slidesPerView: 1.4,
			spaceBetween: 34,
		},
		500: {
			slidesPerView: 1.3,
		},
		300: {
			slidesPerView: 1.2,
		},
	},
});
