function getRandomColor() {
    const [red, green, blue] = Array.from({ length: 3 }, () => Math.floor(Math.random() * 256));
    return `rgb(${red}, ${green}, ${blue})`;
}

const options = document.querySelectorAll('.color-option');
let oddColorIndex;
let timerActive = true; // Flag to track if the timer is active
let countdown = 20; // Initial countdown time in seconds

function assignRandomColors() {
    if (!timerActive) {
        // If the timer is not active, return without assigning new colors
        return;
    }

    oddColorIndex = Math.floor(Math.random() * 3);

    const randomColors = new Array(3);

    randomColors[oddColorIndex] = getRandomColor(); // Generate a unique odd color

    const oneColor = getRandomColor()

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
}

let score = 0;

function updateTimerDisplay() {
    // Update the timer display in the 'timer' element
    const timerElement = document.querySelector('.timer');

    // Format the countdown time as "M:SS" (minutes:seconds)
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    timerElement.textContent = formattedTime;
}

let timer;
function startTimer() {
    timerActive = true;

    // Update the timer display immediately
    updateTimerDisplay();

    timer = setInterval(() => {
        countdown--;

        // Update the timer display every second
        updateTimerDisplay();

        if (countdown <= 0) {
            timerActive = false;
            clearInterval(timer);

            // After the timer expires, remove click event listeners
            options.forEach(option => {
                option.removeEventListener('click', handleClick);
            });
        }
    }, 1000); // Update every 1000 milliseconds (1 second)
}

// Event handler for div clicks
function handleClick(event) {
    if (!timerActive) {
        // If the timer is not active, return without processing the click
        return;
    }

    const clickedOption = event.target;
    if (clickedOption.dataset.odd === 'true') {
        // User clicked the correct odd color
        score++;
    }
    console.log("score:", score);

    // After user's selection, generate new colors for the next round
    assignRandomColors();
}

options.forEach(option => {
    option.addEventListener('click', handleClick);
});

// Start the timer when the page loads
startTimer();

assignRandomColors();