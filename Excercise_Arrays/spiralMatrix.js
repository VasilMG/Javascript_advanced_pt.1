function solve(dim1, dim2){

    let isRow = true;
    let isCol = false;
    let isMovingAhead = true;
    let matrix = [];

    for (let i = 0; i < dim1; i++) {
        matrix.push([]);
    }

    let value = 1;
    let startRow = 0;
    let endRow = dim1 - 1;
    let startCol = 0;
    let endCol = dim2 -1;

    let countDown = dim1 * dim2;
    while (countDown !== 0) {
        
        if(isRow && isMovingAhead){
            for (let i = startCol; i <= endCol; i++) {
               matrix[startRow][i] = value;
               value++;
            }
            isRow = false;
            isCol = true;
            startRow++;
        } else if (isCol){
            for (let i = startRow; i <= endRow; i++) {
                matrix[i][endCol] = value;
                value++;
            }
            isCol = false;
            isMovingAhead = false;
            endCol--;
        } else if(!isRow){
            for (let i = endCol; i >= startCol; i--) {
                matrix[endRow][i] = value;
                value++;
            }
            endRow--;
            isRow = true;
        } else{
            for (let i = endRow; i >= startRow; i--) {
                matrix[i][startCol] = value;
                value++;
            }
            isMovingAhead = true;
            startCol++;
        }

        countDown--;
    }

    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join(' '));
    }
}

solve(5,5);