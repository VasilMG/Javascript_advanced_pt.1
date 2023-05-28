
function solve(num, ...operations){
    let number = Number(num);
    let arr = operations;
    arr.forEach(element => {
        switch(element){
            case 'chop': number /= 2; break;
            case 'dice': number = Math.sqrt(number); break;
            case 'spice': number += 1; break;
            case 'bake': number *= 3; break;
            case 'fillet': number -= (number*0.2); break;
        }
        console.log(number);
    });
}


solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');