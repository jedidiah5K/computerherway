// Function for Incorrect Choice (Red Flash + Shake)
function wrongChoice() {
    let redFilter = document.getElementById("redFilter");
    redFilter.style.display = "block";

    // Apply shake animation
    document.body.style.animation = "shake 0.5s";

    // Remove red filter and shake effect after animation
    setTimeout(() => {
        redFilter.style.display = "none";
        document.body.style.animation = "";
    }, 500);
}

// Function for Correct Choice (Leads to Page 8)
function correctChoice() {
    window.location.href = "eighthpage.html";
}
