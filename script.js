const button1 = document.getElementById('check-btn');
const test = document.getElementById('result');
const text_input = document.getElementById('text-input');


function checkPalindrome() {
if (text_input.value === "") {
   alert("Please input a value.")
   return;
}
let check_word = text_input.value;
console.log(check_word);
//test.innerText = check_word;
check_word = check_word.replace(/\W|_/g, "").toLowerCase();
console.log("new word to check: " + check_word);
let temp = [];
let j = check_word.length - 1;
   for (let i = 0; i < check_word.length/2; i++) {
     console.log("from the front:");
     console.log(check_word[i]);
     console.log("from the back: ");
     console.log(check_word[j]);
     if (check_word[i] !== check_word[j]) {
            console.log("nope");
            failedTest();
            return;
        } 
        j--;
     }
console.log("palindrome!");
passedTest();
return;
   }

   function failedTest() {
     test.innerText = text_input.value + " is not a palindrome.";
   }

function passedTest() {
     test.innerText = text_input.value + " is a palindrome.";
   }

button1.addEventListener("click", checkPalindrome);