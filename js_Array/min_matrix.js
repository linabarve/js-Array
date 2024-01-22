
		// matrix min.............. 
	
let m = [
    [3, 7, 1],
    [8, 5, 2],
    [9, 4, 6]
];


let min = m[0][0];


for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {
     
        if (m[i][j] < min) {
            min = m[i][j];
        }
    }
}

console.log("Minimum Element in the Matrix:", min);

	


