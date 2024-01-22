

		// find the sum & aveage of elements....

const prompt = require("prompt-sync")();

let n = Number(prompt("Enter the number of elements in the array: "));
let a = [];

for (let i = 0; i < n; i++) {
    let k = Number(prompt());
    a[i] = k;
}

let s = 0;
for (let i = 0; i < n; i++) {
    s = s + a[i]      
    }

let  avg = s/n
console.log(avg);


