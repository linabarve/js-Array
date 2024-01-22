

		// create 2D array...............

const prompt = require("prompt-sync")();

let n = Number(prompt());
let r = Number(prompt());

let a = [];

for (let i = 0; i < n; i++) {
   
    let row = [];

    for (let j = 0; j < r; j++) {
        let k = Number(prompt());
        row[j] = k;
    }

    
    a.push(row);
}

// Display the 2D array
for (let i = 0; i < n; i++) {
    for (let j = 0; j < r; j++) {
        console.log(a[i][j]);
    }
}

