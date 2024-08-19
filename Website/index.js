// get user input when they click submit and assign it to variable userInput
let userInput;
document.getElementById("userSubmit").onclick = function(){
    userInput = document.getElementById("inputBox").value;

    // Below is the set of if else statements that will be used to drive the functionality of the website "game"

    // If statement to test if "password" is entered or not. Case sensitive.
    // If it is, we move on to the next prompt.
    if (userInput == 'password' && textBox.innerText == "Hello! Please enter password."){
        textBox.innerText = "Incorrect, please try again.";
        document.getElementById("textBox").style.marginLeft = '550px';
    }
    // Next if statement tests if "again" is entered or not. Case sensitive.
    // If it is, we move on to the next prompt.
    else if (userInput == 'again' && textBox.innerText == "Incorrect, please try again."){
        textBox.innerText = "No, the password is wrong.";
        document.getElementById("textBox").style.marginLeft = '550px';
    }
    // If no correct input is entered for the respective prompt, we enter 
    else {
        alert('Error, please retry.');
    }

    // clear out the input field for next input
    document.getElementById("inputBox").value='';
}
