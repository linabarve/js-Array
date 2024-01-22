

		//   ........mean.......
		
const prompt = require("prompt-sync")();

let n = Number(prompt());
let avg;
let p;
let s = 0;	
let a = []


for(let i = 0; i < n; i++){
p = Number(prompt())
a[i] = p;
s = s + p;
}
avg = s/n;
console.log("Display average:",avg);


