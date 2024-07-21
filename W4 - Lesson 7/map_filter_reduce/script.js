
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers
function sum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

function multiply(arr) {
    return arr.reduce((acc, curr) => acc * curr, 1);
}

// Define a function reverse() that computes the reversal of a string.
function reverse(str) {
    return str.split('').reverse().join('');
}

// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
function filterLongWords(arr, i) {
    return arr.filter(word => word.length > i);
}

// Test cases
console.log('sum([1, 2, 3, 4, 5]) ->', sum([1, 2, 3, 4, 5]));
console.log('multiply([1, 2, 3, 4, 5]) ->', multiply([1, 2, 3, 4, 5]));
console.log('reverse("hello") ->', reverse('hello'));
console.log('filterLongWords(["hello", "world", "goodbye", "hi"], 4) ->', filterLongWords(["hello", "world", "goodbye", "hi"], 4));