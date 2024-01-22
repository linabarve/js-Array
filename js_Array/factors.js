

		// Factors...........
		


const prompt = require("prompt-sync")();

let n = Number(prompt());
let a = [];
let p = 0;

for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        a[p] = i;
        p = p + 1;
        console.log(a[p-1]);
    }
}

