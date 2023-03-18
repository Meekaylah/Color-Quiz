const newColor = [0, 1]
const colors = document.querySelectorAll('.color-box h2');
console.log(colors)


function generateColors() {
	const arrColor = []
	newColor.forEach((color) => {
		let hexCode = '#' + Math.random().toString(16).substring(2,8);
		arrColor.push(hexCode)
		console.log(hexCode)
	});
	console.log(arrColor)
	const sample = [0, 1, 2]
	const shuffledArray = sample.sort(() => 0.5 - Math.random());
	const result = shuffledArray.slice(0, 3);
	console.log(result)
	colors[result[0]].style.backgroundColor = arrColor[0]
	colors[result[2]].style.backgroundColor = arrColor[0]
	colors[result[1]].style.backgroundColor = arrColor[1]
}

generateColors();