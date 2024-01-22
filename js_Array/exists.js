
 		// Number exists or not..............

const prompt = require("prompt-sync")();

let a = [1, 2, 3, 4, 5, 6, 7];
let k = Number(prompt("Enter a number to check: "));
let exists = false;

for (let i = 0; i < a.length; i++) {
    if (a[i] === k) {
        exists = true;
        break;
    }
}

if (exists) {
    console.log("Exists:", k);
} else {
    console.log("Not Exist:", k);
}

