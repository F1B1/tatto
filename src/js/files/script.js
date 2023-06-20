// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
import { isMobile } from "./functions.js";

window.onload = function(){
	if(innerWidth < 768 && isMobile.any()){
		const iconBurger = document.querySelector('.icon-menu');
		const bugerMenu = document.querySelector('.menu__body');
		iconBurger.addEventListener("click", function(e) {
			iconBurger.classList.toggle('_active')
			bugerMenu.classList.toggle('_active')
		});
	}
}