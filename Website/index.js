// get user input when they click submit and assign it to variable userInput
let userInput;
document.getElementById("userSubmit").onclick = function(){
    userInput = document.getElementById("inputBox").value;

    // If statement to test if "password" is entered or not. Case sensitive.
    if (userInput == 'password'){
        alert(userInput)
    }

    // clear out the input field for next input
    document.getElementById("inputBox").value='';
}
