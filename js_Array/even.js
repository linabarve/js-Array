

		// even number............
		
const prompt = require("prompt-sync")();

let n = Number(prompt());

let a = [];
for (let i = 0; i < n; i++) {
    let k = Number(prompt());
    a[i] = k
}

for (let i = 0; i < n; i++) {
    if (a[i] % 2 === 0) {
        console.log(a[i]);
    }
}


const prompt = require("prompt-sync")();

let n = Number(prompt())
let p = 2

let a = []
for(let i = 0; i < n; i++){
	console.log(p)
	p = p + 2
}
