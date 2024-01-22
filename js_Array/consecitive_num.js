
	//  Consecutive Number count array...........
	

let a = [1, 2, 3, 4, 1, 1, 1, 6, 1];
let c = 0;

for (let i = 0; i < a.length - 1; i++) {
    if (a[i] === a[i + 1]) {
        c = c + 1;
    }
}

console.log(c);

