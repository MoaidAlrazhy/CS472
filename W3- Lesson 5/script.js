// this took me half hour to complete

// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

console.log("Expected output of max(20,10) is 20 and  " +
    myFunctionTest(20, function () {
        return max(20, 10);
    }));

console.assert(max(20, 10) === 20, "Test failed");

// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
}

console.log("Expected output of maxOfThree(20,10,30) is 30 and  " +
    myFunctionTest(30, function () {
        return maxOfThree(20, 10, 30);
    }));

console.assert(maxOfThree(20, 10, 30) === 30, "Test failed");

// Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}

console.log("Expected output of isVowel('a') is true and  " +
    myFunctionTest(true, function () {
        return isVowel('a');
    }));

console.assert(isVowel('a') === true, "Test failed");

// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
function sum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log("Expected output of sum([1,2,3,4]) is 10 and  " +
    myFunctionTest(10, function () {
        return sum([1, 2, 3, 4]);
    }));

console.assert(sum([1, 2, 3, 4]) === 10, "Test failed");

function multiply(arr) {
    return arr.reduce((acc, curr) => acc * curr, 1);
}

console.log("Expected output of multiply([1,2,3,4]) is 24 and  " +
    myFunctionTest(24, function () {
        return multiply([1, 2, 3, 4]);
    }));

console.assert(multiply([1, 2, 3, 4]) === 24, "Test failed");

// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
function reverse(str) {
    return str.split('').reverse().join('');
}

console.log("Expected output of reverse('jag testar') is 'ratset gaj' and  " +

    myFunctionTest('ratset gaj', function () {
        return reverse('jag testar');
    }));

console.assert(reverse('jag testar') === 'ratset gaj', "Test failed");

// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

function findLongestWord(words) {
    return words.reduce((acc, curr) => acc.length > curr.length ? acc : curr).length;

}

console.log("Expected output of findLongestWord(['jag', 'testar', 'longest']) is 7 and  " +

    myFunctionTest(7, function () {
            return findLongestWord(['jag', 'testar', 'longest']);

        }
    ));

console.assert(findLongestWord(['jag', 'testar', 'longest']) === 7, "Test failed");

// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
}

console.log("Expected output of filterLongWords(['jag', 'testar', 'longest'], 4) is ['testar', 'longest'] and  " +
    myFunctionTest(['testar', 'longest'].toString(), function () {
        return filterLongWords(['jag', 'testar', 'longest'], 4).toString();
    }));

console.assert(filterLongWords(['jag', 'testar', 'longest'], 4).toString() === ['testar', 'longest'].toString(), "Test failed");

function myFunctionTest(expected, function2test) {
    if (function2test() === expected) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED";
    }
}

console.log("modified fiddle code");
const a = [1, 3, 5, 3, 3];

console.log('a) Multiply each element by 10 input array: [1, 3, 5, 3, 3]');
const multiplied = a.map(function (elem) {
    return elem * 10;
});
console.log(multiplied); // Output: [10, 30, 50, 30, 30]

console.log('b) Get only the elements equal to 3 from input array: [1, 3, 5, 3, 3]');
const threes = a.filter(function (elem) {
    return elem === 3;
});
console.log(threes); // Output: [3, 3, 3]

console.log('c) Find the first element that is equal to 3 in input array: [1, 3, 5, 3, 3]');
const product = a.reduce(function (prevValue, elem) {
    return prevValue * elem;
}, 1); // Start with 1 for multiplication
console.log(product); // Output: 135
