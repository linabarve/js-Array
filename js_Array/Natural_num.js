
		// use input Natural Number............
				
				
const prompt = require("prompt-sync")();

let n = Number(prompt());
let a = [];

for (let i = 0; i < n; i++) {
    let k = prompt();
    a[i] = k
}

console.log(a);



const prompt = require("prompt-sync")();

let n = Number(prompt("Enter the numbre"));
let a = [];

for (let i = 0; i < n; i++) {
    a[i] = i+1
}

console.log(a);

