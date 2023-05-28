function printNth (arr, n){
    const result = [];
    for (let i=0; i<arr.length; i+=n){
        result.push(arr[i]);
    }
    console.log(result);
}
printNth(['5','20','31','4','20'], 2);