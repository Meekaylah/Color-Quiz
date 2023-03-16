const colors = document.querySelectorAll('.color-box h2');


function generateColors() {
	colors.forEach((color) => {
		let hexCode = Math.random().toString(16);
		console.log(hexCode)
	});
}

generateColors();