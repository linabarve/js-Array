
// take an  from user as input and revers.................


const prompt = require("prompt-sync")();
let n = Number(prompt("Enter the number:"));

let a = [];
for (let i = 0; i < n; i++) {
    let p = Number(prompt());
    a.push(p); 
}

for(let j = n-1; j >= 0; j--){
	console.log(a[j])
}

