// Function to go to the next page when play button is clicked
function goToSecondPage() {
    window.location.href = "secondpage.html"; // Change to your next page
}
// Wait for the page to fully load, then pop in the text box
window.onload = function() {
    document.querySelector('.text-box').classList.add('show');
};
// Function to go to third page when clicking the bottom info box
function goToThirdPage() {
    window.location.href = "thirdpage.html";
}
// Function to go to the next page when clicking the next button
function goToFourthPage() {
    window.location.href = "fourthpage.html";
}
// Function to play a click sound and go to the next page
function goToFifthPage() {
    let clickSound = new Audio('sounds/click.mp3'); // Ensure this file exists
    clickSound.play();
    
    // Wait for the sound to play before redirecting
    setTimeout(() => {
        window.location.href = "fifthpage.html";
    }, 300);
}
document.addEventListener("DOMContentLoaded", function () {
    // Select the button
    const nextButton = document.getElementById("nextButton");

    // Add click event to go to sixthpage.html
    nextButton.addEventListener("click", function () {
        window.location.href = "sixthpage.html"; // Change this if needed
    });
});

// Function for Incorrect Choices
function wrongChoice() {
    // Show Red Filter for a brief moment
    let redFilter = document.getElementById("redFilter");
    redFilter.style.display = "block";

    // Shake Effect
    document.body.style.animation = "shake 0.5s";

    // Remove Red Filter after animation
    setTimeout(() => {
        redFilter.style.display = "none";
        document.body.style.animation = "";
    }, 500);
}

// Function for Correct Choice
function correctChoice() {
    window.location.href = "seventhpage.html";
}


