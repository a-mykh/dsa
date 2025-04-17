/**
 * Approach: Greatest Common Divisor (GCD)
 * 
 * `gcd` function calculates the Greatest Common Divisor of two numbers `a` and `b` using the Euclidean algorithm.
 * 
 * By dividing `k` by GCD of `k` and `j`, we are finding the smallest number, 
 *      that, when `j` is multiplied by, will be divisible by `k`. 
 *      This number is used as increment for the inner loop to ensure that only relevant indices are checked.
 * 
 * Time: O(n²)
 *      - nested loop is not strictly O(n²) because of `step` factor
 *      - Euclidean algorithm has O(log(min(a, b)))
 *      - `gcd` function is considered O(log(k)) or O(log(n))
 *      - `gcd` function call inside outer loop has O(n*log(k))
 * Space: O(1)
 */
function countPairs3(nums: number[], k: number): number {
    let count = 0;

    for (let j = 1; j < nums.length; j++) {
        const step = k / gcd(k, j);

        for (let i = 0; i < j; i += step) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }
    }

    return count;
};

function gcd(a: number, b: number): number {
    while (b > 0) {
        [a, b] = [b, a % b];
    }

    return a;
}
