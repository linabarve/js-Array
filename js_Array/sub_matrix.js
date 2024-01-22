


		// Two matrix sub........
		

const prompt = require("prompt-sync")();

let n = Number(prompt("Enter the size of the arrays: "));

let p = [];
let k = [];
let r = [];

console.log("Enter elements for array P:");
for (let i = 0; i < n; i++) {
    let s = Number(prompt(`Enter element P[${i}]: `));
    p[i] = s;
}

console.log("Enter elements for array K:");
for (let i = 0; i < n; i++) {
    let a = Number(prompt(`Enter element K[${i}]: `));
    k[i] = a;
}


for (let i = 0; i < n; i++) {
    r[i] = p[i] - k[i];
}


console.log("Resulting Array:");
console.log(r.join(" "));

