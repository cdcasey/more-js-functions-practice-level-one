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