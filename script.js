function repeatString(str, num) {
    let endStr = '';
    for (let i = 0; i < num; i++) {
        endStr += str;
    }
    return endStr;
};

function reverseString(str) {
    return str.split("").reverse().join("");
};

function removeFromArray(array, args) {
    let endArray = [];
    array.forEach(element => {
        if (!args.includes(element)) {
            endArray.push(element);
        }
    });
    return endArray;
};

function sumAll(bot, top) {
    let sum = 0;
    for (let i = bot; i <= top; i++) {
        sum += i;
    }
    return sum;
};

function leapYears() {

};

function convertToCelsius() {
};

function convertToFahrenheit() {
};

console.log(repeatString("hello", 5));
console.log(reverseString("hello"));
console.log(removeFromArray(['a', 'b', 'c'], 'a'));
console.log(sumAll(1, 5));
leapYears();
convertToCelsius();
convertToFahrenheit();

