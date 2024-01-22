

	// 
	
/*	
const prompt = require("prompt-sync")();

let r = Number(prompt());
let c = Number(prompt());

let a = []
let p = []

let s = 0;

for(let i = 0; i < r; i++){
	for(let j = 0; j < c; ){
		if(i == j && i + j == 2){
			s = s + a[i]
			}
		}
}
for(let i = 0; i < r; i++){
	console.log(a[s])
}
*/


const prompt = require("prompt-sync")();

let r = Number(prompt("Enter the number of rows: "));
let c = Number(prompt("Enter the number of columns: "));

let a = [];


for (let i = 0; i < r; i++) {
    let row = [];
    for (let j = 0; j < c; j++) {
        row.push(Number(prompt));
    }
    a.push(row);
}


console.log("Matrix:");
for (let i = 0; i < r; i++) {
    console.log(a[i].join(" "));
}

let s = 0;

// Calculate the sum of the main diagonal
for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
        if (i == j) {
            s += a[i][j];
        }
    }
}

console.log("Sum of the main diagonal:", s);
		
