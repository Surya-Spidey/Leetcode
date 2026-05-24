let x = 16561; // input

let original = x;   // store original
let num = 0;

while (x > 0) {
    let lastDigit = x % 10;  // get last digit
    num = num * 10 + lastDigit; // build reversed number
    x = Math.floor(x / 10);
}

let result = num === original;

console.log(result);

if (original < 0) console.log(false);