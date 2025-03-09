// Kevin Strom
/*
1. When the login form is submitted, prevent the default form submission behavior
2. Retrieve the values entered for first name, last name, and UAT zip code
3. Combine the first name and last name into a single full name string with a space between them
4. Check if the combined full name exceeds 20 characters. If it does, alert a warning that the name is too long and stop
5. Validate that the zip code is exactly 5 digits. If it is not, alert a warning that the zip code is invalid and stop
6. Verify that the UAT zip code is "85389". If it is not, alert a warning that the zip code does not match the UAT zip code and stop
7. If all validations pass, alert a secret message stating "UAT is awesome!"
8. Redirect the user to the home page
*/

var form = document.getElementById("loginForm"); // retrieve the login form element by its id

form.onsubmit = function(event)  // set the onsubmit property of the form to a function that will run on form submission
{
    event.preventDefault(); // prevent the default form submission behavior
    
    var firstName = document.getElementById("firstName").value; // get the value from the first name input
    var lastName = document.getElementById("lastName").value; // get the value from the last name input
    var uatZip = document.getElementById("uatZip").value; // get the value from the uat zip code input
    var fullName = firstName + " " + lastName; // combine first name, a space, and last name into one variable
    
    if (fullName.length > 20)  // check if the combined name is longer than 20 characters
    {
        alert("warning: name is too long!"); // alert if the name is too long
        return false; // stop further execution if invalid
    }
    
    var zipRegex = /^\d{5}$/; // regular expression to check for exactly 5 digits
    
    if (!zipRegex.test(uatZip))  // check if the zip code does not match the 5-digit pattern
    {
        alert("warning: invalid zip code!"); // alert a warning if the zip code is invalid
        return false; // stop if invalid
    }
    
    if (uatZip !== "85389")  // check if the zip code is not equal to the University of Advancing Technology zip code
    {
        alert("warning: zip code does not match the UAT zip code!"); // alert a warning if the zip code is not the correct UAT zip code
        return false; // stop if invalid
    }
    
    alert("secret message: UAT is awesome!"); // alert the secret message if inputs are valid
    window.location.href = "3-2_home.html"; // redirect to the home page
}