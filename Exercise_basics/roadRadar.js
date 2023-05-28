function roadRadar(speed, area){
    const limits = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
    }
    if (speed <= limits[area]){
        console.log(`Driving ${speed} km/h in a ${limits[area]} zone`)
    }else{
        let diff = speed - limits[area];
        let status = '';
        if (diff <= 20){
            status = 'speeding';
        }else if (20 < diff && diff <= 40){
            status = 'excessive speeding';
        }else{
            status = 'reckless driving';
        }
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limits[area]} - ${status}`)
    }
}
// roadRadar(40, 'city');
roadRadar(200, 'motorway');