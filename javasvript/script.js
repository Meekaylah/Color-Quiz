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
	colors[result[0]].style.backgroundColor = arrColor[1]
	colors[result[1]].style.backgroundColor = arrColor[0]
	colors[result[2]].style.backgroundColor = arrColor[0]
}

generateColors();

const startingMinutes = .1;
let time = startingMinutes * 60;
const countdownEl = document.getElementById('countdown');
var interval = setInterval(timer, 1000);
function timer() {
	const minutes = Math.floor(time / 60);
	let seconds = time % 60;

	seconds = seconds < 10 ? '0' + seconds : seconds;

	countdownEl.innerHTML = `${minutes}:${seconds}`;
	time--;

	if(countdownEl.innerHTML == "0:00") {
		clearInterval(interval)
	}
}


var score = 0;
function clickColors(elem){
	var colorAlert = elem.style.backgroundColor
	console.log(colorAlert)
	var num = 0
	for (var i = 0; i < colors.length; i++) {
		if(colorAlert.includes(colors[i].style.backgroundColor)){
			console.log("is not okay");
			//isFirstTime = false;
			num += 1
		}
	}
	generateColors()
	console.log(num)
	if(num == 2){
		score +=0
	}
	else {
		score +=1
	}
	console.log("score =" + score)
};

