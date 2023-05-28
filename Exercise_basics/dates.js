function dates(d1, d2, d3){
    const the_date = `${d1}-${d2}-${d3}`;
    const date = new Date(the_date);
    const previous = date - 1
    const result = new Date(previous);
    console.log(`${result.getFullYear()}-${result.getMonth() + 1}-${result.getDate()}`);
}

dates(2016, 9, 30);
dates(2015, 5, 10);
dates(2023, 3, 1);