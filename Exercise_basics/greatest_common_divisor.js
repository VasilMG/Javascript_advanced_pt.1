function gcd(...args) {
    let result = 1
    for (let i = 2; i < 9; i++) {
        result = args.every(x => x % i === 0) ? i : result
    }

    return result
}
console.log(gcd(2154, 458));