

  		// rotation 1 2 3 4 5 output 3 4 5 1 2........
  
  
const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));
let k = Number(prompt("Enter the k rotate:"));

let a = [];
for (let i = 0; i < n; i++) {
    let p = Number(prompt());
    a.push(p); 
}

let temp;
for (let i = 0; i < k; i++) {
    temp = a[0];
    for (let j = 0; j < n - 1; j++) {
        a[j] = a[j + 1];
    }
    a[n - 1] = temp;
}

for (let j = 0; j < n; j++) {
    console.log(a[j]);
}

