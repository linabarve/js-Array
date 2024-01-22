

		
		// positive negative  num count................
		
		
const prompt = require("prompt-sync")();

let n = Number(prompt("Enter the number of elements in the array: "));
let a = [];

for (let i = 0; i < n; i++) {
    let k = Number(prompt());
    a[i] = k;
}

let positiveCount = 0; 
let negativeCount = 0; 

for (let i = 0; i < n; i++) {
    if (a[i] > 0) {
        positiveCount = positiveCount + 1;
    } else {
        negativeCount = negativeCount + 1;
    }
}

console.log("Number of positive elements:", positiveCount);
console.log("Number of negative elements:", negativeCount);

