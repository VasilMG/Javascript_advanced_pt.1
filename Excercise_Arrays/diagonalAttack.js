function solve(matrix){
    let splitted = matrix.map(e => e.split(' ').map(ele => Number(ele)));
    let diagonalLen = Math.min(splitted.length, splitted[0].length);

    let diagonalsCoordinates = [];
    let left = 0;
    let right = 0;
    for (let i = 0; i < diagonalLen; i++) {
            diagonalsCoordinates.push(`${i} ${i}`);
            if(i !== splitted.length-1-i){
                diagonalsCoordinates.push(`${i} ${splitted.length-1-i}`);
            }
            
            left += splitted[i][i];
            
            right += splitted[i][splitted.length-1-i];
    }

    let isDiagonalCoordinate = (row, col) => {
        if(diagonalsCoordinates.some(e => e === `${row} ${col}`)){
            return true;
        }

        return false;
    };

    if(left === right){
        for (let i = 0; i < splitted.length; i++) {
            for (let j = 0; j < splitted.length; j++) {
                if(isDiagonalCoordinate(i, j)){
                    continue;
                } else {
                    splitted[i][j] = left;
                }
            }
        }
    }

    for (let i = 0; i < splitted.length; i++) {
        console.log(splitted[i].join(' '));
    }
}

solve(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
);