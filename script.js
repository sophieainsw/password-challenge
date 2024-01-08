// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  
  // Function to prompt user for password options
  // function getPasswordOptions() {
  
  // Function for getting a random element from an array
  function getRandom(arr) {
    var randomNum = Math.floor(Math.random() * arr.length)
    return arr[randomNum]
  }
  
  // Function to generate password with user input
  
  
  function generatePassword() {
    var length1 = prompt("Enter the length of the password (between 8 and 128 characters):");
    if (length1 < 8 || length1 > 128) {
      alert("Please enter a valid password length between 8 and 128 characters.");
      return;
    }
    var lowercase = confirm("Include lowercase characters?");
    var uppercase = confirm("Include uppercase characters?");
    var numeric = confirm("Include numeric characters?");
    var specCharacters = confirm("Include special characters?");
  
    var content = []
    if (lowercase === true) {
      content = content.concat(lowerCasedCharacters)
    }
    if (uppercase === true) {
      content = content.concat(upperCasedCharacters)
    }
    if (numeric === true) {
      content = content.concat(numericCharacters)
    }
    if (specCharacters === true) {
      content = content.concat(specialCharacters)
    }
  
    var password = ""
    for (let counter = 0; counter < length1; counter++) {
      password = password + getRandom(content)
    }
    return password
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);