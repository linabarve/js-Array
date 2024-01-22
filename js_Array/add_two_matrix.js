
		// two matrix  sum.........
		
		
		
const prompt = require("prompt-sync")();

let n = Number(prompt("Enter the size of the matrices: "));

let p = [];
let k = [];
let r = [];

console.log("Enter elements for matrix P:");
for (let i = 0; i < n; i++) {
        let s = Number(prompt());
        p[i]= s;
}

console.log("Enter elements for matrix K:");
for (let j = 0; j < n; j++) {
        let a = Number(prompt());
        k[j] = a;
}


console.log("Resulting Matrix:");
for (let i = 0; i < n; i++) {
	r[i] = p[i]+k[i]
    console.log(r[i]);
}

 


