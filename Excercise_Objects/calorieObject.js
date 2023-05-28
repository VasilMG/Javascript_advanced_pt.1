function calorieObject(data) {

    let obj = {};

    for (let i = 0; i < data.length; i++) {
        if(i % 2 == 0){
            obj[data[i]] = Number(data[i + 1]) 
        }
    }

    console.log(obj)
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);