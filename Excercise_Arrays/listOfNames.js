function solve(names){
    names.sort((a, b) => a.localeCompare(b));

    let counter = 1;

    names.forEach(e => {
        console.log(`${counter++}.${e}`);
    });
}

solve(["John", "Bob", "Christina", "Ema"]);