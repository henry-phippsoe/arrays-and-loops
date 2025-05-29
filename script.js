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

function sumAll() {

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
sumAll();
leapYears();
convertToCelsius();
convertToFahrenheit();

