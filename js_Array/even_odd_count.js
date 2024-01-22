

		// even & odd number count............ 		
		
const prompt = require("prompt-sync")();

let n = Number(prompt("Enter the number of elements in the array: "));
let a = [];

for (let i = 0; i < n; i++) {
    let k = Number(prompt());
    a[i] = k;
}

let even = 0;
let odd = 0;

for (let i = 0; i < n; i++) {
    if (a[i] % 2 === 0) {
        even = even + 1;
    } else {
        odd = odd + 1;
    }
}

console.log("Number of even elements:", even);
console.log("Number of odd elements:", odd);

