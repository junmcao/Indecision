//arugment objects - no longer bound

const add = function (a, b){
    // console.log(arguments)
    return (a+b);
};
// console.log(add(55,1));
//this keyword - no longer bound

const user = {
    name: 'Jun',
    cities: ['Waterloo', 'Scarborough', 'Toronto'],
    printPlacesLived: function () {

    }
};

//Challenge area

const multiplier = {
    // numbers - array of numbers
    // mutiplyBy - single nubmer
    // multiply - return new array

    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 12,
    multiply(){
        return this.numbers.map((number) => number*this.multiplyBy);
    }
};

console.log(multiplier.multiply());
