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

// Function to generate password
function generatePassword() {
// Step 1: How many characters does the user want the password to be?
  var passwordLength = prompt("How long would you like your password to be? (8 - 128)", "12")
// Step 2: Ask if user wants to use uppercase?
  var useUppercase = confirm('Use uppercase letters?')
// Step 3: Ask if user wants to use lowercase?
  var useLowercase = confirm("Use lowercase letters?")
// Step 4: Ask if user wants to use numbers?
  var useNumbers = confirm("Use numbers?")
// Step 5: Ask if user wants to use special characters?
  var useSpecialCharacters = confirm("Use Special Characters?")

// Set up formula to randomize the confirmed choices?
}