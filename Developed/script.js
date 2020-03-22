// Write a function that takes user input and creates a password
// based on that input and returns it
function generatePassword() {
  
    // WRITE YOUR CODE HERE
   
    // Variables storing characters.
  var lowersChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppersChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbersChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specialsChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", "_", "?", "~"];
  var combined = [];

    // Prompts for which chars to use. 
  var useLowers = confirm("Would you like to include Lowercase Letters in the password?");
    console.log(Boolean(useLowers));
  var useUppers = confirm("Would you like to include Uppercase Letters in the password?");
    console.log(Boolean(useUppers));
  var useNumbers = confirm("Would you like to include Numbers in the password?");
    console.log(Boolean(useNumbers));
  var useSpecials = confirm("Would you like to include Special Characters in the password?");
    console.log(Boolean(useSpecials));

        // Everyone should get a second chance. Three strikes sends you to 'undefined' hell.
  if (useLowers == false && useUppers == false && useNumbers == false && useSpecials == false) {
    alert("You can't make a password out of thin air, try again.");
    var useLowers = confirm("Would you like to include Lowercase Letters in the password?");
    var useUppers = confirm("Would you like to include Uppercase Letters in the password?");
    var useNumbers = confirm("Would you like to include Numbers in the password?");
    var useSpecials = confirm("Would you like to include Special Characters in the password?");
  }

    // Conditionals for which chars were selected.
  if (useLowers == true) {
    combined = combined.concat(lowersChars);
  }
    else {
      alert("No Lowercase letters will be used.");
  };

  if (useUppers == true) {
    combined = combined.concat(uppersChars);
  }
    else {
      alert("No Uppercase letters will be used");
  };

  if (useNumbers == true) {
    combined = combined.concat(numbersChars);
  }
    else {
      alert("No Numbers will be used");
  };

  if (useSpecials == true) {
    combined = combined.concat(specialsChars);
  }
    else {
      alert("No Special Characters will be used");
  };
    console.log(combined);

    // Prompt and conditional for length of password.
  var length = prompt("How many characters long do you want the password to be? 8-128 Characters");

  if (isNaN(length) || length > 128 || length < 8) {
    alert("You must pick a number between 8 and 128.");
      return 
  };
    console.log(length);

    // Random string generator.
  function randomString(length, combined) {
    var result = '';
    for (var i = length; i > 0; --i) result += combined[Math.floor(Math.random() * combined.length)];
      return result;
  };
  var random = randomString(length, combined);
    console.log(random);

    // Results.
  return random;

} // END OF LINE //

//////////////////////////////////////////////////////////////
// DO NOT TOUCH THE CODE BELOW
//////////////////////////////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
