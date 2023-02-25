

const menuBurger = document.querySelector('.menu-burger')

const navigation = document.querySelector('.navigation')

menuBurger.addEventListener('click', event => {
	menuBurger.classList.toggle('menu-active')

	navigation.classList.toggle('active-nav')

	document.body.classList.toggle('lock-scroll')
})