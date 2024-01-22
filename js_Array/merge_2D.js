
	
	//  given array merge 2D array............
let n = [1, 2, 3, 5];
let a = [2, 4, 5, 6];
let mergedArray = [];

let i = 0;
let j = 0;

while (i < n.length && j < a.length) {
    if (n[i] < a[j]) {
        mergedArray.push(n[i]);
        i++;
    } else {
        mergedArray.push(a[j]);
        j++;
    }
}

console.log(mergedArray);

