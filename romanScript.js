const text_input = document.getElementById('number');
const convert = document.getElementById('convert-btn');
const display = document.getElementById('output');
let romanNumerals = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
}
function displayNum() {
  let solution = "";
  let entry = text_input.value;
  if (entry != Number(entry) || entry === "") {
    display.innerText = "Please enter a valid number";
    return;
  }
 if (entry <= 0) {
display.innerText = "Please enter a number greater than or equal to 1";
return;
 }
 if (entry >= 4000) {
   display.innerText = "Please enter a number less than or equal to 3999";
  return;
 }
for (let symbol in romanNumerals) {
  while (entry >= romanNumerals[symbol]) {
    solution += symbol;
    entry -= romanNumerals[symbol];
  }
}
display.innerText =solution;
}



convert.addEventListener("click", displayNum);
