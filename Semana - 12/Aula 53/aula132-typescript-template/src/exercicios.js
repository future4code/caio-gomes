function arrNumber(numbers) {
    var odd = numbers.filter(function (number) {
        return number % 2 !== 0;
    });
    return {
        oddNumbers: odd.length,
        totalSum: numbers.reduce(function (accum, currentValue) {
            return accum + currentValue;
        }),
        arrLength: numbers.length
    };
}
console.log(arrNumber([1, 17, 60, 22, 35, 30, 8, 47, 62]));
