// https://codepen.io/LukeDiamantopoulos/embed/xXpaR
import "./rippleButton.css";

export function ripple(e) {

	// Setup
	let windowX = document.body.getBoundingClientRect().left;
	let windowY = document.body.getBoundingClientRect().top;
	let posX = this.getBoundingClientRect().left - windowX; // this.offsetLeft
	let posY = this.getBoundingClientRect().top - windowY; // this.offsetTop
	let buttonWidth = this.offsetWidth;
	let buttonHeight = this.offsetHeight;

	// Add the element
	let ripple = document.createElement('span');
	ripple.classList.add('ripple');

	this.appendChild(ripple);

	// Make it round!
	if(buttonWidth >= buttonHeight)
		buttonHeight = buttonWidth;
	else
		buttonWidth = buttonHeight; 

	// Get the center of the element
	var x = e.pageX - posX - buttonWidth / 2;
	var y = e.pageY - posY - buttonHeight / 2;

	ripple.style.width = `${buttonWidth}px`;
	ripple.style.height = `${buttonHeight}px`;
	ripple.style.top = `${y}px`;
	ripple.style.left = `${x}px`;

	ripple.classList.add('rippleAnimation');

	setTimeout(() => {
		this.removeChild(ripple);
	}, 1000);
}