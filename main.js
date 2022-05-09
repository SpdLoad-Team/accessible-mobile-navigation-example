var navigationBtn = document.querySelector('.navigation-btn');
var navigationMenu = document.querySelector('.navigation-menu');
var menuItems = document.querySelectorAll('.navigation-menu li a');

navigationBtn.addEventListener('click', function(){
	if (navigationMenu.classList.contains('is-active')) {
		this.setAttribute('aria-expanded', 'false');
		navigationMenu.classList.remove('is-active');
	} else {
		navigationMenu.classList.add('is-active');
		this.setAttribute('aria-expanded', 'true');
	}
});