/**
 * Approach: Imperative with
 * - Product of Numbers
 * - Bitwise AND (&)
 * 
 * Bitwise AND (&) operator compares binary representation of 2 numbers.
 *      We compare array item with value 1, which binary representation is '000...0001'
 *      If last bit of array item is 0, `&` returns 0 (0 & 1 = 0), it means the item is even.
 *      If last bit of array item is 1, `&` returns 1 (1 & 1 = 1), it means the item is odd.
 * 
 * Product of numbers is even if at least one of them is even.
 * 
 * Time: O(n)
 * Space: O(n)
 */
function threeConsecutiveOdds3(arr: number[]): boolean {
    const n = arr.length - 2;

    for (let i = 0; i < n; i++) {
        if ((arr[i] & 1) === 0) {
            continue;
        }

        if ((arr[i + 1] * arr[i + 2] & 1) === 1) {
            return true;
        }
    }

    return false;
};
