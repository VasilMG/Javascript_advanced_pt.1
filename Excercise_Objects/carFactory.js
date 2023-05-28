function carFactory(data){

    let rest = {};
    rest.model = data.model;

    if(data.power <= 90){
        rest.engine = {
            power : 90,
            volume : 1800
        }
    }else if(data.power <= 120){
        rest.engine = {
            power : 120,
            volume : 2400
        }
    }else{
        rest.engine = {
            power : 200,
            volume : 3500
        }
    }

    if(data.carriage === "hatchback"){
        rest.carriage = {
            type : "hatchback",
            color : data.color 
        }
    }else{
        rest.carriage = {
            type : "coupe",
            color : data.color
        }
    }


    let size;
    if(data.wheelsize % 2 !== 0){
        size = data.wheelsize;
    }else{
        size = data.wheelsize - 1;
    }
    rest.wheels = [size,size,size,size];

    return rest

}

carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 });