

		//  N prime number.....


const prompt = require("prompt-sync")();

let n = Number(prompt());
let a = [];

for (let i = 0; i < n; i++) {
    let k = Number(prompt());
    a[i] = k;
}

for (let i = 0; i < n; i++) {
    let c = 0;
    for (let j = 1; j <= a[i]; j++) {
        if (a[i] % j === 0) {
            c = c + 1;
        }
    }

    if (c === 2) {
        console.log(`${a[i]} is a prime number`);
    } else {
        console.log(`${a[i]} is not a prime number`);
    }
}

