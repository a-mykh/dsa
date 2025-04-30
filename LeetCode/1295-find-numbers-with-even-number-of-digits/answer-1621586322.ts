/**
 * Approach: Logarithm with
 * - Explicit type conversion using built-in `.toString()` function
 * - Modulo operator for even / odd check
 * 
 * Time: O(n)
 * Space: O(1)
 */
function findNumbers(nums: number[]): number {
    let count = 0;

    for (const num of nums) {
        if (num.toString().length % 2 === 0) {
            count++;
        }
    }

    return count;
};
