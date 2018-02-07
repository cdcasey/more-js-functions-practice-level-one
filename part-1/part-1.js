// write your functions hereww

// sum
function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(3,4));

// isEqual
function isEqual(term1, term2) {
    return term1 === term2;
}

console.log(isEqual(3,4));
console.log(isEqual(3,3));

// discountPercentage
function discountPercentage(amount, discount) {
    if (discount > 100 || discount < 0) {
        return "Invalid discount percentage";
    }
    return amount * discount / 100.0;
}

console.log(discountPercentage(50,40));
console.log(discountPercentage(50,5));
console.log(discountPercentage(100,10));
console.log(discountPercentage(100,101));
console.log(discountPercentage(100,-1));

// stringCapitalize
function stringCapitalize(stringOfWords) {
    let wordArray = stringOfWords.split(' ');
    for (let word in wordArray) {
        wordArray[word] = wordArray[word][0].toUpperCase() + wordArray[word].slice(1);
    }
    return wordArray.join(' ');
}

console.log(stringCapitalize("The quick brown fox jumped over the lazy dog"));

//  Define a function called `evenNumbers` that takes a random integer, from 0 to 100, and outputs all the even integers from 0 to that random number.
function evenNumbers(number) {
    let evenArray = [];
    for (let i = 0; i <= number; i++) {
        if (i % 2 == 0) {
            evenArray.push(i);
        }
    }
    return evenArray
}

console.log(evenNumbers(Math.floor(Math.random() * 101)));

// Define a function called `isDivisible` that takes two arguments and returns a boolean. Return true if the first argument is divisible by the second; otherwise, return false.
function isDivisible(num1, num2) {
    return num1 % num2 === 0;
}

console.log(isDivisible(3,4));
console.log(isDivisible(3,3));
