function solve(infoArr){
    let width = infoArr[0];
    let height = infoArr[1];
    let row = infoArr[2];
    let col = infoArr[3];
    let matrix = [];
    for (let i = 0; i < height; i++) {
        matrix.push([]);
    }

    for (let i = 0; i < height; i++) {

        for (let j = 0; j < width; j++) {
            
            let valueForSet = Math.max(Math.abs(i-row), Math.abs(j-col)) + 1;

            matrix[i][j] = valueForSet;
        }
    }


    for (let i = 0; i < matrix.length; i++) {
        
        console.log(matrix[i].join(' '));
    }
}

solve([5, 5, 2, 2]);
solve([4, 4, 0, 0]);
solve([3, 3, 2, 2]);