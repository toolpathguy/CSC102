/* 

Start Game
    hide the "Start Game" button
    reset any feedback message
    hide the "Next Round" button
    hide the choices container
    select a random word from the list
    set the correct answer as the color corresponding to the selected word
    pick a random display color (different from the correct answer)
    display the word in the chosen display color
    wait for a short time, then hide the word
    call showChoices() to display answer choices

Show Choices
    initialize an empty list to store answer choices
    add the correct color to the list
    randomly select two additional colors that are not duplicates
    shuffle the colors in the list to randomize answer order
    assign each button a background color from the choices list
    display the choice buttons

Check Answer
    get the color value from the selected button
    compare the selected color to the correct answer
    if the answer is correct:
    display "Correct!" message
    otherwise:
    display "Wrong! The correct color was [correct answer]"

Show the "Next Round" button to start a new round

Next Round
    clicking "Next Round" will restart the game process from step 1 (Start Game)

*/

// List of possible words and colors
var words = ["Red", "Blue", "Green", "Yellow", "Purple", "Orange"];
var colors = ["red", "blue", "green", "yellow", "purple", "orange"];
var correctColor = ""; // Stores the correct color for the current round

// function to start a new game round
function startGame() 
{
    // Get references to the HTML elements
    var wordDisplay = document.getElementById("wordDisplay");
    var choicesContainer = document.getElementById("choicesContainer");
    var nextRoundButton = document.getElementById("nextRoundButton");
    var feedbackMessage = document.getElementById("feedbackMessage");
    var startGameButton = document.getElementById("startGameButton");


    
    //hide the start game button
    startGameButton.style.display = "none";
    
    // reset feedback message
    feedbackMessage.textContent = "";

    // hide the next round button
    nextRoundButton.style.display = "none";

    // hide the choices
    choicesContainer.style.display = "none";


    
    // select a random word and color
    var randomWordIndex = Math.floor(Math.random() * words.length); // generates random index number used to return a random word from the array
    correctColor = words[randomWordIndex].toLowerCase(); // correct answer should be the word itself as a color
    
    var randomColorIndex;
    do 
    {
        randomColorIndex = Math.floor(Math.random() * colors.length); // generates random index number used to return a random color from the array
    } 
    while (colors[randomColorIndex] == correctColor); // checks if the color is the same as the word (loops until a different color is chosen)

    // display the chosen word in a different color
    wordDisplay.textContent = words[randomWordIndex]; // sets the text to the word
    wordDisplay.style.color = colors[randomColorIndex]; // sets the displayed color to a different color
    


    // after some time in seconds, hide the word and show the choices
    setTimeout(function() 
    {
        wordDisplay.textContent = "";
            showChoices();
    }, 250); // <-- amount of time in milliseconds



}

// Function to display three answer choices
function showChoices() 
{
    // Get references to the HTML elements
    var choicesContainer = document.getElementById("choicesContainer");
    var buttons = choicesContainer.getElementsByClassName("choiceButton");
    
    var usedColors = []; // array to store answer selection options
    usedColors.push(correctColor); // pushes correct color into choices array
    
    // Select two unique incorrect colors
    while (usedColors.length < 3) 
    {
        var newColor = colors[Math.floor(Math.random() * colors.length)]; // picks new color
        if (usedColors.indexOf(newColor) == -1)  // avoids duplicates by comparing the new color index value to -1(-1 means the value is not in the array)
        {
            usedColors.push(newColor); // pushes new color to array if it is not a duplicate
        }
    }
    
    usedColors.sort(); // Shuffle the colors so the correct answer isn't always the first answer
    
    // assigns each button a color from the selection
    for (var i = 0; i < buttons.length; i++)  // for loop that loops once for every value in the array
    {
        buttons[i].style.backgroundColor = usedColors[i]; // sets the bg color of the current button
        buttons[i].colorValue = usedColors[i]; // stores the color value in a property of the button
    }
    
    choicesContainer.style.display = "block"; // Show the buttons
}

// Function to check if the player's answer is correct
function checkAnswer(button) 
{

    // retrieves color value from button property
    var selectedColor = button.colorValue; 

    // Get references to the HTML elements
    var feedbackMessage = document.getElementById("feedbackMessage");
    var nextRoundButton = document.getElementById("nextRoundButton");
    
    // Compare selected color with the correct color
    if (selectedColor == correctColor) 
    {
        feedbackMessage.textContent = "Correct!";
    } 
    else 
    {
        feedbackMessage.textContent = "Wrong! The correct color was " + correctColor;
    }
    
    // show Next Round button
    nextRoundButton.style.display = "block";
}