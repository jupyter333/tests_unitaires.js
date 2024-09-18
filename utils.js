// Donne vrai si le paramètre es pair
export function isEven(number) {
    return number % 2 === 0;
}
// Donne vrai si le paramètre es impair
export function isOdd(number) {
    return number % 2 !== 0;
}

// fonction qui calcule la factorielle
export function factorial(n) {
    // factorial is not defined for negative numbers
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
