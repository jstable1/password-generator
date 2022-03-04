// Assignment code here
var specialCharactersArray = ["!", "?", "@", "$", "#", "%", "*", "<", ">", ".", "(", ")", "&", "+", "-", "/", "="];
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var userChoices = [];

var passwordPrompts = function(){
  var promptLength = window.prompt('The password must be between 8-128 characters. How long would you like the password to be?');

  if (promptLength === "" || promptLength === null || promptLength < 8 || promptLength > 128) {
    window.alert("You need to provide a valid answer! Please try again.");
    return;
  }

  userChoices = [];

  var specialChoice = window.confirm("Would you like to include special characters?");
    if (specialChoice === true) {
      userChoices = userChoices.concat(specialCharactersArray);
    }

  var numberChoice = window.confirm("Would you like to include numbers?");
    if (numberChoice === true) {
      userChoices = userChoices.concat(numberArray);
    }

  var lowerCaseChoice = window.confirm("Would you like to include lower case?");
    if (lowerCaseChoice === true) {
      userChoices = userChoices.concat(lowerCaseArray);
    }

  var upperCaseChoice = window.confirm("Would you like to include upper case?");
    if (upperCaseChoice === true) {
      userChoices = userChoices.concat(upperCaseArray);
    }

  if (specialChoice === false && numberChoice === false && lowerCaseChoice === false && upperCaseChoice === false) {
    window.alert("You need to choose at least 1 character type");
    return;
  }

  return promptLength
}

var generatePassword = function(){
  var promptLength = passwordPrompts();

  var passwordArray = []; 

  for (var i = 0; i < promptLength; i++){
    var randomNumber = Math.floor(Math.random()*userChoices.length)
    passwordArray.push(userChoices[randomNumber])
  };

  return passwordArray.join("");
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
