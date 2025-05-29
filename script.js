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

function leapYears(year) {
    if ((year % 4 === 0) && (!(year % 100 === 0) || (year % 400 === 0))) {
        return true;
    }
    else {
        return false;
    }
};

function convertToCelsius(f) {
    return Math.round((f - 32) * (5 / 9) * 10) / 10;
};

function convertToFahrenheit(c) {
    return Math.round(((c * 9) / 5 + 32) * 10) / 10;
};

console.log(repeatString("hello", 5));
console.log(reverseString("hello"));
console.log(removeFromArray(['a', 'b', 'c'], 'a'));
console.log(sumAll(1, 5));
console.log(leapYears(2028));
console.log(convertToCelsius(94));
console.log(convertToFahrenheit(34.4));
