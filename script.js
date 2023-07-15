var lowercaseChar = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var uppercaseChar = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialChar = [
  " ",
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "\\",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

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

function generatePassword() {
  //length of password is first prompt. must be between 8 and 128 characters long
  var length = window.prompt(
    "Please select a password length between 8 and 128 characters."
  );
  if (length < 8) {
    alert("Length must be between 8 and 128 characters!");
    return;
  }
  if (length > 128) {
    alert("Length must be between 8 and 128 characters!");
  }

  window.confirm("Use lower case letters?");

  window.confirm("Use upper case letters?");

  window.confirm("Use numbers?");

  window.confirm("Use special characters?");

  return;
}

//prompt 2 is lowercase characters
//prompt 3 is upper case characters
//prompt 4 is numeric characters
//prompt 5 is special characters
//we need to make sure at least one of the prompts was selected
//next, the password is generated
