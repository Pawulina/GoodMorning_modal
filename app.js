function myFunction(x) {
	x.classList.toggle("change");
}

function openCloseSlideMenu() {
	let hamburger = document.querySelector(".container");
	let menu = document.querySelector("ul");
	let overlay = document.querySelector(".overlay");

	hamburger.addEventListener("click", () => {
		if (menu.classList.contains("open")) {
			menu.classList.remove("open");
			overlay.classList.remove("visible");
		} else {
			menu.classList.add("open");
			overlay.classList.add("visible");
		}
	});

	overlay.addEventListener("click", () => {
		menu.classList.remove("open");
		overlay.classList.remove("visible");
		hamburger.classList.remove("change");
	});
}

function openModal() {
	let presentButton = document.querySelector(".present-btn");
	let modal = document.querySelector(".modal");
	let closeModal = document.querySelector(".close-modal");
	let roosterSound = document.querySelector(".rooster-sound");

	presentButton.addEventListener("click", () => {
		modal.classList.add("display");
		roosterSound.play();
	});

	closeModal.addEventListener("click", () => {
		modal.classList.remove("display");
	});

	modal.addEventListener("click", (e) => {
		if (e.target === modal) {
			// Sprawdzamy, czy kliknięto w overlay
			modal.classList.remove("display");
		}
	});
}

openCloseSlideMenu();
openModal();
