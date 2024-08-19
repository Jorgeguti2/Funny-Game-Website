// get user input when they click submit and assign it to variable userInput
let userInput;
document.getElementById("userSubmit").onclick = function(){
    userInput = document.getElementById("inputBox").value;

    // Below is the set of if else statements that will be used to drive the functionality of the website "game"

    // If statement to test if "password" is entered or not. Case sensitive.
    // If it is, we move on to the next prompt.
    // If it is not, we say error and ask them to try again.
    if (userInput == 'password'){
        textBox.innerText = "Incorrect, please try again.";
        document.getElementById("textBox").style.marginLeft = '550px';
    }else {
        alert('Error, please retry.');
    }

    // clear out the input field for next input
    document.getElementById("inputBox").value='';
}
