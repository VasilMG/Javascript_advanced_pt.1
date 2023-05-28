function solve(commands){
    let arr = [];
    for (let i = 0; i < commands.length; i++) {
        if(commands[i] == 'add'){
            arr.push(i+1);
        }
        else{
            arr.pop();
        }
    }

    if(arr.length === 0){
        console.log('Empty');
    } else {
        arr.forEach(e => console.log(e));
    }
    
}

solve(['add', 
'add', 
'remove', 
'add', 
'add']
);