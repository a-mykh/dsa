/**
 * Counts digits of number using base-10 logarithm without explicit conversion of number to string.
 * Applicable for non-negative integers.
 * 
 * @param {number} n non-negative integer
 * @returns number of digits
 */
function countDigits(n) {
    return Math.trunc(Math.log10(n)) + 1;
}
