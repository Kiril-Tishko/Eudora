// Mobile menu
const main_headerToggle = document.getElementById('main-header__toggle')
const main_headerInToggle = document.querySelector('.main-header__toggle>*')
const mainHeader = document.getElementById('main-header')

main_headerToggle.addEventListener('click', function() {
	mainHeader.classList.toggle('main-header--show')
	mainHeader.classList.toggle('main-header__toggle--active')
})

window.addEventListener('click', function(e) {
	if (e.target != main_headerToggle && e.target != main_headerInToggle) {
		mainHeader.classList.remove('main-header--show')
		mainHeader.classList.remove('main-header__toggle--active')
	}
})


// Scroll effect
function Scroll() {
	let positionY = window.pageYOffset

	const mainHeader = document.getElementById('main-header')
	if (screen.width > 500) {
		if (positionY > 50) {
			mainHeader.classList.add('scrolled')
			mainHeader.classList.add('scrolled-transition')
		} else {
			mainHeader.classList.remove('scrolled')
		}
	}

	const menuTitle = document.getElementById('menu__title')
	const menuSubtitle = document.getElementById('menu__subtitle')
	if (positionY > 200) {
		menuTitle.classList.add('animated', 'zoomIn', 'visible')
		menuSubtitle.classList.add('animated', 'zoomIn', 'visible')
	}

	const block = document.getElementById('block')
	if (positionY > 400) {
		block.classList.add('animated', 'fadeInLeft', 'visible')
	}

	const textPart = document.getElementById('text-part')
	const imgPart = document.getElementById('img-part')
	if (positionY > 900) {
		textPart.classList.add('animated', 'fadeInLeft', 'visible')
		imgPart.classList.add('animated', 'fadeInRight', 'visible')
	}

	const dishMenu__title = document.getElementById('dish-menu__title')
	const dishMenu__subtitle = document.getElementById('dish-menu__subtitle')
	if (positionY > 1200) {
		dishMenu__title.classList.add('animated', 'zoomIn', 'visible')
		dishMenu__subtitle.classList.add('animated', 'zoomIn', 'visible')
	}

	const wrapperPlate = document.getElementsByClassName('wrapper__plate')
	if (positionY > 1450) {
		for (index = 0; index < wrapperPlate.length; ++index) {
			wrapperPlate[index].classList.add('animated', 'zoomIn', 'visible')
		}
	}

	const contactWrapper = document.getElementById('contact__wrapper')
	if (positionY > 2100) {
		contactWrapper.classList.add('animated', 'zoomIn', 'visible')
	}
}

window.addEventListener('scroll',Scroll)



// SLIDER
let wrapper = document.getElementsByClassName('wrapper__card')
let sliderButton = document.getElementsByClassName('slider-button')
const leftBtnElem = document.getElementById('left-btn')
const rightBtnElem = document.getElementById('right-btn')
const svgArrow = document.getElementsByClassName('svg-arrow')
const firstSquareElem = document.getElementById('first-square')


let a = 0 // прогресс слайдера
		b = 0 // номер блока в масиве wrapper
function leftSlide () {													// сдвиг влево
	if (a < 0) {a = a + 115}
	if (a >= 0) {leftBtnElem.setAttribute('disabled', 'disabled')} else {rightBtnElem.disabled = false}
	firstSquareElem.style.marginLeft = 'calc((50% - 82px) + ' + a + 'px)'

	b = b - 1
	wrapper[b].classList.add('selected')
	wrapper[b + 1].classList.remove('selected')
}

function rightSlide () {												// сдвиг вправо
	if (a > -1265) {a = a - 115}
	if (a <= -1265) {rightBtnElem.setAttribute('disabled', 'disabled')} else {leftBtnElem.disabled = false}
	firstSquareElem.style.marginLeft = 'calc((50% - 82px) + ' + a + 'px)'

	b = b + 1
	wrapper[b].classList.add('selected')
	wrapper[b - 1].classList.remove('selected')
}

function slideLeftRight() {											// опредиление кнопки левая/правая стрелка(на клаве)
	if (a < 0 && event.keyCode === 37) { leftSlide() }
	if (a > -1265 && event.keyCode === 39) { rightSlide() }
	for (index = 0; index < svgArrow.length; ++index) {

		svgArrow[index].classList.add('active')
		svgArrow[index].style.transitionDelay = '0s'
		setTimeout(hideButton, 2500)
	}
}

function hideButton() {
	for (index = 0; index < svgArrow.length; ++index) {
		svgArrow[index].classList.remove('active')
		svgArrow[index].style.transitionDelay = '2.5s'
	}
}

leftBtnElem.onclick = leftSlide
rightBtnElem.onclick = rightSlide

window.addEventListener('keydown', slideLeftRight)