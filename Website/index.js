// get user input when they click submit and assign it to variable userInput
let userInput;
document.getElementById("userSubmit").onclick = function(){
    userInput = document.getElementById("inputBox").value;
    document.getElementById("inputBox").value='';
}
