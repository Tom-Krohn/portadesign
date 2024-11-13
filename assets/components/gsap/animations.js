gsap.registerPlugin(ScrollTrigger);

const introTitle = document.querySelector('.intro__title');
const introCta = document.querySelector('.intro__cta');
const introOfferItems = document.querySelectorAll('.intro__offer__item');

gsap.from(introTitle, {
	duration: 1,
	x: -100,
	opacity: 0,
	ease: 'power1.inOut',
	scrollTrigger: {
		trigger: introTitle,
		toggleActions: 'play none none reset'
	}
});

gsap.from(introCta, {
	duration: 1,
	y: 50,
	opacity: 0,
	ease: 'power1.inOut',
	delay: .5,
	scrollTrigger: {
		trigger: introCta,
		toggleActions: 'play none none reset'
	}
});

introOfferItems.forEach((item, index) => {
	gsap.from(item, {
		duration: 1,
		y: -50,
		opacity: 0,
		ease: 'power2.inOut',
		delay: index * .2,
		scrollTrigger: {
			trigger: item,
			toggleActions: 'play none none reset'
		}
	});
});