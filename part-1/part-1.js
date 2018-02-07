// write your functions hereww

// Define a function called `sum` that takes two numbers as arguments and returns their sum.
function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(3,4));

// Define a function called `isEqual` that takes two arguments and returns a boolean. Return true if the two arguments are equal and return false if they are not.
function isEqual(term1, term2) {
    return term1 === term2;
}

console.log(isEqual(3,4));
console.log(isEqual(3,3));

// Define a function called `discountPercentage` that returns the total discount ($), given the original amount and discount percentage (as arguments). Return a warning if the discount amount is greater than 100 or less that 0 percent.
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

// Define a function called `stringCapitalize` that takes a string as an argument and returns the same string with the first letter of each word capitalized. Assume that each individual word is separated by only one space.
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

// **Bonus**: Write a function called `oddNumbers` that takes a random integer, from 0 to 100. If the number is greater than 40 then output all the odd integers from 40 to the random number. If the number is less than 40, output all the odd integers from 0 to 40.
function oddNumbers(number) {
    let oddArray = [];
    if (number < 40) {
        for (let i = 0; i <= 40; i++) {
            if (i % 2 !== 0) {
                oddArray.push(i);
            }
        }
    } else for (let i = 40; i <= number; i++) {
        if (i % 2 !== 0) {
            oddArray.push(i);
        }
    }

    return oddArray
}

console.log(oddNumbers(Math.floor(Math.random() * 101)));