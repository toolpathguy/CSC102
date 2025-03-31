// Global variables
var posX = 100; // Initial X position
var posY = 100; // Initial Y position
var velocityX = 1; // Horizontal speed
var velocityY = 1; // Vertical speed
var intervalID = 0;

function start() {
    // Local variable
    var image = document.getElementById("imgMeme");

    // Disable the start button and enable the stop button
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;

    // Start the interval to move the image
    intervalID = setInterval(function () {
        // Update the position
        posX += velocityX;
        posY += velocityY;

        // Check for collisions with the edges of the window
        if (posX + image.offsetWidth >= window.innerWidth || posX <= 0) {
            velocityX = -velocityX; // Reverse horizontal direction
        }
        if (posY + image.offsetHeight >= window.innerHeight || posY <= 0) {
            velocityY = -velocityY; // Reverse vertical direction
        }

        // Apply the new position to the image
        image.style.left = posX + "px";
        image.style.top = posY + "px";

        // Update the position display
        document.getElementById("XandY").innerHTML = "x = " + posX + ", y = " + posY;
    }, 10); // Update every 10ms for smooth movement
}

function stop() {
    // Disable the stop button and enable the start button
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;

    // Stop the interval
    clearInterval(intervalID);
}