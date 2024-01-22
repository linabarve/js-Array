

		// N  Factorial Number.......
		


const prompt = require("prompt-sync")();

let n = Number(prompt());
let p = 0;
let a = [];

for (let i = 0; i < n; i++) {
    let k = Number(prompt());
    a[i] = k;

    let f = 1;
    for (let j = 1; j <= k; j++) {
        f = f * j;
    }
    a[p] = f;
    p = p + 1;
}

for (let i = 0; i < n; i++) {
    console.log(a[i]);
}

