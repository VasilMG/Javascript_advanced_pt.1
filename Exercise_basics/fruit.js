function theFruit(fruit, grams, price){
    const kilograms = grams / 1000
    const final_price = kilograms * price
    console.log(`I need \$${final_price.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`)
}
// input1 = ['orange', 2500, 1.80]
// input2 = ['apple', 1563, 2.35]
theFruit('orange', 2500, 1.80);
theFruit('apple', 1563, 2.35);
