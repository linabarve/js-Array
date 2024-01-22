

		// even odd number sum...............
		
	
const prompt = require("prompt-sync")();

let n = Number(prompt("Enter the number of elements in the array: "));
let a = [];

for (let i = 0; i < n; i++) {
    let k = Number(prompt());
    a[i] = k;
}

let s = 0;
let sum = 0;

for (let i = 0; i < n; i++) {
    if (a[i] % 2 === 0) {
        s = s + a[i];
    } else {
        sum = sum + a[i];
    }
}

console.log("Number of even elements:", s);
console.log("Number of odd elements:", sum);

