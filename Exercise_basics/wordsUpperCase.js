function getWordsInUpperCase(input){
    let pattern = /\w+/g;
    let matches = input.toUpperCase().match(pattern).join(', ');

    console.log(matches);
}

getWordsInUpperCase('Hi, how are you?')
getWordsInUpperCase('hello');
getWordsInUpperCase('Functions in JS can be nested, i.e. hold other functions');