function solve(arr){
    arr.sort((a, b) =>{
        if(a.length === b.length){
            return a.toLowerCase().localeCompare(b.toLowerCase());
        } else{
            return a.length - b.length;
        }
    });

    arr.forEach(e => {
        console.log(e);
    });
}

solve(['test', 
'Deny', 
'omen', 
'Default']
);