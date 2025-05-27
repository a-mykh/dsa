/**
 * Calculates the sum of all integers in range using formula for sum of arithmetic series
 *      Sn = n/2 * (a + l)
 *      where `n` is the number of terms
 *            `a` is the first term
 *            `l` is the last term (`l` is lowercase character `L`, not digit)
 */
function sumOfIntegersInRange(first, last) {
    const n = last - first + 1;

    return n * (first + last) / 2;
}
