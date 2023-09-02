// Variables
const options = document.querySelectorAll('.color-box h2');
let oddColorIndex;
let timerActive = true; // Flag to track if the timer is active
let countdown = 20; // Initial countdown time in seconds
let score = 0;
let timer;

// Function to get a random color in 'rgb(r, g, b)' format
function getRandomColor() {
    const [red, green, blue] = Array.from({ length: 3 }, () => Math.floor(Math.random() * 256));
    return `rgb(${red}, ${green}, ${blue})`;
}

// Function to assign random colors to options
function assignRandomColors() {
    if (!timerActive) {
        // If the timer is not active, return without assigning new colors
        return;
    }

    oddColorIndex = Math.floor(Math.random() * 3);

    const randomColors = new Array(3);

    randomColors[oddColorIndex] = getRandomColor(); // Generate a unique odd color

    const oneColor = getRandomColor();

    options.forEach((option, index) => {
        if (randomColors[index] === undefined) {
            // Use shared color for empty indexes
            randomColors[index] = oneColor;
        }

        option.style.backgroundColor = randomColors[index];

        if (index === oddColorIndex) {
            option.dataset.odd = true; // Mark the odd color
        } else {
            option.dataset.odd = false;
        }
    });

    // Attach event listener for option clicks when the page loads
    options.forEach(option => {
    option.addEventListener('click', handleClick);
});
}

// Function to update the timer display
function updateTimerDisplay() {
    const timerElement = document.querySelector('.timer');

    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    timerElement.textContent = formattedTime;
}

// Function to start the timer
function startTimer() {
    timerActive = true;
    updateTimerDisplay();

    timer = setInterval(() => {
        countdown--;

        updateTimerDisplay();

        if (countdown <= 0) {
            timerActive = false;
            clearInterval(timer);
            options.forEach(option => {
                option.removeEventListener('click', handleClick);
            });

            showPopup(score);
        }
    }, 1000); // Update every 1000 milliseconds (1 second)
}

// Event handler for div clicks
function handleClick(event) {
    if (!timerActive) {
        return;
    }

    const clickedOption = event.target;
    if (clickedOption.dataset.odd === 'true') {
        score++;
    }
    console.log("score:", score);

    assignRandomColors();
}

// Function to show the popup with the user's score
function showPopup(score) {
    const popup = document.getElementById('popup');
    const scoreElement = document.getElementById('score');

    scoreElement.textContent = score;
    popup.style.display = 'block';
}

// Function to hide the popup
function hidePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

// Event listener for the "New Game" button in the popup
document.getElementById('new-game-btn').addEventListener('click', () => {
    score = 0;
    hidePopup();
    countdown = 20;
    updateTimerDisplay();
    startTimer();
    assignRandomColors();
});

// Start the timer when the page loads
startTimer();
assignRandomColors();
