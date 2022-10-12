// Assignment Code
var generateBtn = document.querySelector("#generate");

// Alphabet, Numbers, Special Characters
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = uppercase.map(letter => letter.toLowerCase())
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "<", ">", "/", "?", "~", "`"]



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}


// Function to generate password
function generatePassword() {
// Step 1: How many characters does the user want the password to be?
  var passwordLength = prompt("How long would you like your password to be? (8 - 128)", "12")

// set perameters to make sure password is not < 8 or > 128
if (passwordLength < 8 || passwordLength > 128) {
  alert('Password must be between 8 and 128 characters... Come on. Be Secure!!!')
  return generatePassword();
}


// Step 2: Ask if user wants to use uppercase?
  var useUppercase = confirm('Use uppercase letters?')
// Step 3: Ask if user wants to use lowercase?
  var useLowercase = confirm("Use lowercase letters?")
// Step 4: Ask if user wants to use numbers?
  var useNumbers = confirm("Use numbers?")
// Step 5: Ask if user wants to use special characters?
  var useSpecialCharacters = confirm("Use Special Characters?")

// Set up formula to randomize the confirmed choices?

//  Structure of potential character outputs
 var potentialCharacters = []
if (useUppercase) {
  potentialCharacters = potentialCharacters.concat(uppercase);
}

if (useLowercase) {
  potentialCharacters = potentialCharacters.concat(lowercase);
}

if (useNumbers) {
  potentialCharacters = potentialCharacters.concat(numbers);
}

if (useSpecialCharacters) {
  potentialCharacters = potentialCharacters.concat(special);
}

// Create the password of "passwordLength" length

var password = ''
for (var i = 0; i < passwordLength; i++) {
  password = password + potentialCharacters[getRandomInt(potentialCharacters.length)]
}
return password

}