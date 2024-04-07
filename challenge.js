document.addEventListener("DOMContentLoaded", function() {
    // Variables to hold state
    let timerValue = 0;
    let counterValue = 0;
    let likes = {};
    let timerInterval;
    let isPaused = false;

    // DOM elements
    const timerElement = document.getElementById("timer");
    const counterElement = document.getElementById("counter");
    const plusButton = document.getElementById("plus");
    const minusButton = document.getElementById("minus");
    const likeButton = document.getElementById("like");
    const pauseButton = document.getElementById("pause");
    const resumeButton = document.getElementById("resume");
    const commentInput = document.getElementById("comment-input");
    const commentList = document.getElementById("list");

    // Functions to implement each feature
    function startTimer() {
        timerInterval = setInterval(() => {
            timerValue++;
            timerElement.textContent = timerValue;
        }, 1000);
    }

    function incrementCounter() {
        counterValue++;
        counterElement.textContent = counterValue;
    }

    function decrementCounter() {
        counterValue--;
        counterElement.textContent = counterValue;
    }

    function likeNumber() {
        likes[counterValue] = (likes[counterValue] || 0) + 1;
        // Update DOM to display likes count
    }

    function pauseGame() {
        clearInterval(timerInterval);
        plusButton.disabled = true;
        minusButton.disabled = true;
        likeButton.disabled = true;
        pauseButton.textContent = "Resume";
        isPaused = true;
    }

    function resumeGame() {
        startTimer();
        plusButton.disabled = false;
        minusButton.disabled = false;
        likeButton.disabled = false;
        pauseButton.textContent = "Pause";
        isPaused = false;
    }

    function addComment() {
        const commentText = commentInput.value;
        // Add comment to the DOM
        commentInput.value = ""; // Clear input field after adding comment
    }

    // Event listeners
    plusButton.addEventListener("click", incrementCounter);
    minusButton.addEventListener("click", decrementCounter);
    likeButton.addEventListener("click", likeNumber);
    pauseButton.addEventListener("click", isPaused ? resumeGame : pauseGame);
    resumeButton.addEventListener("click", resumeGame);
    // Add event listener for comment submission button

    // Start the timer
    startTimer();
});
