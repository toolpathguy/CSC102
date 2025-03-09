// Kevin Strom

/*
1. When the form is submitted, stop the browser from performing its default action
2. Determine which button the user pressed by checking the active submit button
3. If the pressed button is labeled "Done"
    - Display a message saying "Thank you for using the palindrome checker!"
    - Make sure this message is visible
    - Hide the form so no further input can be entered
    - End the process
4. Otherwise, retrieve the text entered by the user
    - Remove all spaces from the input text
    - Convert the cleaned text to lowercase to ensure the check is case-insensitive
    - Reverse the lowercase text
5. Compare the lowercase text with its reversed version:
   - If they are the same, display a message stating that the original input is a palindrome
   - If they are different, display a message stating that the original input is not a palindrome
6. Make the result message visible
7. Clear the input field for any future entries
*/


var form = document.getElementById("palindromeForm"); // retrieve the form element by its id

form.onsubmit = function(event)  // set the onsubmit property of the form to handle submission
{
    event.preventDefault(); // prevent the default form submission behavior
    
    var submitButton = event.submitter || document.activeElement; // get the submit button that was clicked
    
    if (submitButton && submitButton.value === "Done") // if the active element's value is "Exit", process exit behavior
    { 
        document.getElementById("result").innerHTML = "Thank you for using the palindrome checker!"; // update result div with thank you message
        document.getElementById("result").style.display = "inline-block"; // make result container visible
        form.style.display = "none"; // hide the form to prevent further input
        return false; // return false to prevent traditional form submission
    }
    
    var inputString = document.getElementById("inputString").value; // retrieve the value entered by the user
    var cleanedString = inputString.replace(/\s+/g, ''); // remove all whitespace from the input string
    var lowerString = cleanedString.toLowerCase(); // convert the cleaned string to lowercase to check case-insensitively
    var reverseString = lowerString.split('').reverse().join(''); // reverse the lowercased string
    
    if (lowerString === reverseString) // check if the lowercased string equals its reversed version
    { 
        document.getElementById("result").innerHTML = "'" + inputString + "' is a palindrome!"; // display positive message
    } 
    
    else // if it is not a palindrome
    { 
        document.getElementById("result").innerHTML = "'" + inputString + "' is not a palindrome."; // display negative message
    }
    
    document.getElementById("result").style.display = "inline-block"; // show the result container
    document.getElementById("inputString").value = ""; // clear the input field for next entry
}