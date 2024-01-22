

		// Alternate element from the last...........

let a = [5, 4, 9, 2, 1, 0];
let p = 0;
let arr = [];

for (let i = 5; i >= 0; i-= 2) {
    arr[p] = a[i];
    p = p + 1;
}

console.log("Alternate Array:");

for (let i = 0; i < p; i++) {
    console.log(arr[i]);
}


