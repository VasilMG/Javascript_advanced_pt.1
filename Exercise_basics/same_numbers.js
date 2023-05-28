function same(nmbr){
    const arr = `${nmbr}`.split("");
    const d = arr[-1];
    const result = Boolean(arr.every((x) => x == arr[arr.length - 1]));
    console.log(`${result}`);
    console.log(`${arr.map(Number).reduce((a,b) => a + b, 0)}`);
}
same(1234);
// same(222222);