

function isNegative (num) {
    return num < 0;
}
console.log(isNegative(-5));


function isTen (num) {
    return num === 10;
}
console.log(isTen('10'));


function double (num) {
    return (num * 2);
}
console.log(double(7));


function remove9s (array) {
    var arrayWithoutNine = array.filter(function(value) { return value != '9' });
    return arrayWithoutNine;
}
console.log(remove9s([3, 7, 9, 2, 9]));


function average (nums) {
    var avg =nums.reduce((a, b) => (a + b)) / nums.length;
    return avg;
}
console.log(average([4, 6, 2, 6])); //4.5


function countOdds(nums) {
    // var numArray = Array.from();
    var odds = nums.filter(x => x%2);
    return odds.length;
}
console.log(countOdds([4, 3, 5, 7, 8]))


function averageSales(arr) {
    var avg = arr.reduce((total, arr) => arr.sales + total,0)
    return avg / arr.length;
}
console.log(averageSales([
    {name: 'Sabrina', sales: 100},
    {name: 'Loren', sales: 50},
    {name: 'Jamo', sales: 150},
]));



function convertNameToObject(string) {
    var space = string.indexOf( ' ');
    var first = string.substring(0, space);
    var last = string.substring(space + 1);
    var newObj = {
        firstName: first,
        lastName: last,
    };
    return newObj;

}
console.log(convertNameToObject('Sabrina Ayres'))



function countVowels(string) {
    var vowelList = 'AEIOUaeiou';
    var vowelsCount = 0;
    for(var i = 0; i < string.length ; i++) {
        if (vowelList.indexOf(string[i]) !== -1) {
            vowelsCount += 1;
        }
    } return vowelsCount;
}
console.log(countVowels('Sabrina'));



function analyzeWord(string) {
    var vowelList = 'AEIOUaeiou';
    var wordAnalyzed = {
        word: string,
        numberOfLetters: string.length,
        numberOfVowels: countVowels(string),
    };
    return wordAnalyzed;
}
console.log(analyzeWord('codeup'));

function capitalizeName(string) {
    var space = string.indexOf( ' ');
    var first = string.substring(0, space)
    var last = string.substring(space + 1)
    var firstCap = first.charAt(0).toUpperCase() + first.slice(1);
    var lastCap = last.charAt(0).toUpperCase() + last.slice(1);
    var fullName = '' + firstCap + " " + lastCap;
    return fullName;
}
console.log(capitalizeName('sabrina ayres'));