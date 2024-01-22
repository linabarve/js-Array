

			// Duplicate element.............

const prompt = require("prompt-sync")();

let n = Number(prompt("Enter the number of elements in the array: "));
let a = [];

for (let i = 0; i < n; i++) {
    let k = Number(prompt());
    a[i] = k;
}

console.log("Duplicate elements in the array:");

for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        if (a[i] === a[j]) {
            console.log(a[i]);
            break; 
        }
    }
}

