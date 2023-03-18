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
	const shuffledArray = sample.sort(() => Math.random() - 0.5);
	const result = shuffledArray.slice(0, 3);
	console.log(result)
	colors[result[0]].style.backgroundColor = arrColor[0]
	colors[result[1]].style.backgroundColor = arrColor[0]
	colors[result[2]].style.backgroundColor = arrColor[1]
}

generateColors();
var num = 0
function clickColors(elem){
	var colorAlert = elem.style.backgroundColor
	console.log(colorAlert)
	for (var i = 0; i < colors.length; i++) {
		if(colorAlert.includes(colors[i].style.backgroundColor)) {
			console.log("Correct!")
			// num += .5
		}
	}
	generateColors()
	console.log(num)
}