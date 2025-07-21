window.toggleMenu = function () {
	var menuButton = document.getElementById("menu-cross");
	var menuClose = document.getElementById("cross");
	var dropdown = document.getElementById("menu");

	menuButton.classList.toggle("hidden");
	menuClose.classList.toggle("hidden");

	dropdown.classList.toggle("hidden");
};
