const checkButton = document.getElementById('check-btn');
const clearButton = document.getElementById('clear-btn');
const display = document.getElementById('results-div');
const entry = document.getElementById('user-input');

function checkNumber() {
  if (entry.value === "") {
    alert("Please provide a phone number");
  } 
display.innerText = "works!";
  if (entry.value.length < 10) {
    display.innerText = "Invalid US number: " + entry.value;
    return;
  }
console.log(entry.value);
let regex = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[-\s]?\d{4}$/;
  let validation = regex.test(entry.value);
  console.log("this is " + validation);
  if (validation) {
    display.innerText = "Valid US number: " + entry.value;
  }
  if (validation == false) {
    display.innerText = "Invalid US number: " + entry.value;
  }

  
}

/*function testIfValid(str) {
  let regex = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/;
  let validation = regex.test(str);
  if (validation) {
    display.innerText = "Valid US number: " + str;
  } else if (validation === false) {
    display.innerTest = "Invalid US number: " + str;
  }
}*/

function clearScreen() {
  display.innerText = '';
}


checkButton.addEventListener("click", checkNumber);
clearButton.addEventListener("click", clearScreen);