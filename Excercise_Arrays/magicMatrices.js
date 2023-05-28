function solve(matrix){
    let isMagic = true;
    let magicSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        let currentSum = 0;
        for (let j = 0; j < matrix[i].length; j++) {
            currentSum += matrix[i][j];
            if(i === 0){
                magicSum += matrix[i][j];
            }
        }

        if(currentSum !== magicSum){
            isMagic = false;
            break;
        }
    }

    if(isMagic){
        for (let i = 0; i < matrix[0].length; i++) {
            let currentSum = 0;
            for (let j = 0; j < matrix.length; j++) {
                currentSum += matrix[j][i];
            }
            if(currentSum !== magicSum){
                isMagic = false;
                break;
            }
        }
    }

    console.log(isMagic);
}

solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
   );