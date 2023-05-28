function solve(arr){
    arr.sort((a, b) => a-b);

    let resultArr = [];
    while(arr.length !== 0){
        let first = arr.shift();

        if(first != undefined){
            resultArr.push(first);
        }

        let last = arr.pop();

        if(last != undefined){
            resultArr.push(last);
        }
    }

    //console.log(resultArr);
    return resultArr;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);