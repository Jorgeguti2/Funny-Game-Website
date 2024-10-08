// get user input when they click submit and assign it to variable userInput
let userInput;

// function that will be used for the initial prompts where user enters text prompts
document.getElementById("usersubmit").onclick = function(){
    userInput = document.getElementById("inputbox").value;

    // Below is the set of if else statements that will be used to drive the functionality of the website "game"

    // If statement to test if "password" is entered or not. Case sensitive.
    // If it is, we move on to the next prompt.
    if (userInput == 'password' && textbox.innerText == "Hello! Please enter password."){
        textbox.innerText = "Incorrect, please try again.";
        document.getElementById("textbox").style.marginLeft = '550px';
    }
    // Next if statement tests if "again" is entered or not. Case sensitive.
    // If it is, we move on to the next prompt.
    else if (userInput == 'again' && textbox.innerText == "Incorrect, please try again."){
        textbox.innerText = "No, the password is wrong.";
        document.getElementById("textbox").style.marginLeft = '550px';
    }
    // Next if statement tests if "wrong" is entered or not. Case sensitive.
    // If it is, we move on to the next prompt.
    else if (userInput == 'wrong' && textbox.innerText == "No, the password is wrong."){
        textbox.innerText = "Click the smallest dot on the screen";
        document.getElementById("textbox").style.marginLeft = '500px';
        document.getElementById("inputbox").remove();
        document.getElementById("usersubmit").remove();

        // Unhide the dot image to use as the correct dot
        document.getElementById("dot").style.visibility = 'visible';
        // Unhide the dots image to have the tricky part of the prompt show
        document.getElementById("dots").style.visibility = 'visible'; 
        
    }
    // If no correct input is entered for the respective prompt, we enter 
    else {
        alert('Error, please retry.');
    }

    // clear out the input field for next input
    document.getElementById("inputbox").value='';
}

// function that will be used for the "click the smallest dot" prompt
document.getElementById("dot").onclick = function(){
    textbox.innerText = "Yay! You beat the game!";
    document.getElementById("textbox").style.marginLeft = '550px';
    // Hide the dot image to use as the correct dot
    document.getElementById("dot").style.visibility = 'hidden';
    // Hide the dots image to have the tricky part of the prompt show
    document.getElementById("dots").style.visibility = 'hidden'; 
    //Unhide the emoji to show to celebrate the win
    document.getElementById("congrats").style.visibility = 'visible';
}
