function solve(x1, y1, x2, y2){

    let distance = (val1, val2, val3, val4) => Math.sqrt(Math.pow(val1 - val3, 2) + Math.pow(val2 - val4, 2));
    let distance1 = distance(x1, y1, 0, 0);
    let distance2 = distance(x2, y2, 0, 0);
    let distance3 = distance(x1, y1, x2, y2);

    let printResult = (val1, val2, val3, val4, dist) => {
        if(Number(dist) === dist && dist % 1 === 0){
            console.log(`{${val1}, ${val2}} to {${val3}, ${val4}} is valid`);
        } else{
            console.log(`{${val1}, ${val2}} to {${val3}, ${val4}} is invalid`);
        }
    };

    printResult(x1, y1, 0, 0, distance1);
    printResult(x2, y2, 0, 0, distance2);
    printResult(x1, y1, x2, y2, distance3);
}

solve(2, 1, 1, 1);