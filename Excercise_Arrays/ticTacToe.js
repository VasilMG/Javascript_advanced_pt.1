function solve(positions){

    let matrix = [];
    for (let row = 0; row < 3; row++) {
            
        matrix.push([ false, false, false]);
    }

    let hasWinner = (row, col) => {
        if(matrix[row][col] !== false){
            let currenValue = matrix[row][col];
            let rowCount = 0;
            let colCount = 0;
            let leftDialgonal = 0;
            let rightDiagonal = 0;

            for (let i = 0; i < matrix.length; i++) {

                if(currenValue === matrix[row][i]){
                    rowCount++;
                }
                
                if(currenValue === matrix[i][col]){
                    colCount++;
                }

                if(col == row && currenValue === matrix[i][i]){
                    leftDialgonal++;
                }

                if(col !== row || (col === 1 && row === 1)){
                    if(currenValue === matrix[i][matrix.length-i-1]){
                        rightDiagonal++;
                    }
                }
            }

            if(matrix.length === rowCount ||
               matrix.length === colCount ||
               matrix.length === leftDialgonal ||
               matrix.length === rightDiagonal){
                   return true;
               }

        }

        return false;
    };

    let isAlreadyTaken = (row, col) =>{
        if(matrix[row][col] === false){
            return false;
        } else {
            return true;
        }
    };

    let printResult = (winner) => {
        console.log(`Player ${winner} wins!`);
        for (let i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join('\t'));
        }
    };

    let isFirstPlayer = true;
    let currentPlayer = 'X';

    while(positions.length > 0 && matrix.some(e => e.some(inner => inner === false))){
        
        let currenPosition = positions.shift().split(' ').map(e => Number(e));

        if(isAlreadyTaken(currenPosition[0], currenPosition[1])){
            console.log("This place is already taken. Please choose another!");
            continue;
        }

        if(isFirstPlayer){
            matrix[currenPosition[0]][currenPosition[1]] = currentPlayer;
            if(hasWinner(currenPosition[0], currenPosition[1])){
                printResult(currentPlayer);
                return;
            }
            currentPlayer = 'O';
            isFirstPlayer = false;
        } else {
            matrix[currenPosition[0]][currenPosition[1]] = currentPlayer;
            if(hasWinner(currenPosition[0], currenPosition[1])){
                printResult(currentPlayer);
                return;
            }
            currentPlayer = 'X';
            isFirstPlayer = true;
        }
    }

    console.log("The game ended! Nobody wins :(");
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].join('\t'));
    }
}


solve(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]

);