

			// reverse array............
			
			
let a = [5, 4, 9, 2, 1, 0];
let p = 0;
let arr = [];

for (let i = 5; i >= 0; i--) {
    arr[p] = a[i];
    p = p + 1;
}

console.log("Reversed Array:");

for (let i = 0; i < 6; i++) {
    console.log(arr[i]);
}


