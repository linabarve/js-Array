

	// find the maximum value..........



const prompt = require("prompt-sync")();

let n = Number(prompt("Enter the number of elements in the array: "));
let a = [];
let max = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
    let k = Number(prompt());
    a[i] = k;

    if (a[i] > max) {
        max = a[i];
    }
}

console.log("Maximum element in the array:", max);

