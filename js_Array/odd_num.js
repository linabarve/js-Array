

		// odd number..........
		
const prompt = require("prompt-sync")();

let n = Number(prompt())
let a = []
for(let i = 0; i < n; i++){
	k = Number(prompt())
	a[i] = k
}
for(let i = 0; i <  n; i++){
	if(a[i]%2!=0){
	console.log(a[i])
	}
}




const prompt = require("prompt-sync")();

let n = Number(prompt())
let p = 1

for(let i = 0; i < n; i++){
	console.log(p)
	p = p + 2
}
