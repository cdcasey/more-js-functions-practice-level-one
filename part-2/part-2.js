// write your functions here

// Define a function called `oldestPerson` that takes an object with names as keys and ages as values (e.g., {'Chuck': 22, 'Brian': 46}), and then returns the name of the oldest living person.
function oldestPerson(people) {
    let oldestAge = 0;
    let theOldest;
    for (let i in people) {
        if (people[i] > oldestAge) {
            oldestAge = people[i];
            theOldest = i;
        }
    }
    return theOldest;
}

console.log(oldestPerson({'Chuck': 22, 'Brian': 46}));

// Define a function called `longestWord` that takes a string and returns the longest word in the string.
function longestWord(aString) {
    let wordArray = aString.split(' ');
    let longest = '';
    for (let i in wordArray) {
        if (wordArray[i].length > longest.length) {
            longest = wordArray[i];
        }
    }
    return longest;
}

console.log(longestWord("The quick brown fox jumped over the lazy dog"));

// Refactor the `longestWord` function so that it ignores punctuation.
function longestWordNoPunct(aString) {
    aString = aString.replace(/[^\w\s]/g, '');
    let wordArray = aString.split(' ');
    let longest = '';
    for (let i in wordArray) {
        if (wordArray[i].length > longest.length) {
            longest = wordArray[i];
        }
    }
    return longest;
}

console.log(longestWord("The quick brown fox jumped over;.!, the lazy dog"));
console.log(longestWordNoPunct("The quick brown fox jumped over.!, the lazy dog"));

// Define a function called `factorial` that takes a random number as an argument and then returns the factorial of that given number.
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n-1);
    }
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(6));

// **Bonus**: Write a function called `palindrome` that takes a string as an argument and returns the string in reversed order. Return true if the string is the same as the reversed string, otherwise return false.
function palindrome(aString) {
    aString = aString.replace(' ', '');
    let reversedString = '';
    for (let i=aString.length-1; i >= 0; i--) {
        reversedString += aString[i];
    }
    return aString === reversedString;
}

console.log(palindrome('hello'));
console.log(palindrome('radar'));
console.log(palindrome('taco cat'));
