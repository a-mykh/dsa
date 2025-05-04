/**
 * Approach: Iteration with
 * - Frequency Map
 * - Bitmask
 * - Bitwise Left Shift ('<<') operator, Bitwise OR ('|') operator
 * 
 * Create consistent representation for each domino regardless of the order of its numbers ('mask'), e.g.:
 *      `[1,2]` -> '110' -> 6
 *      `[2,1]` -> '110' -> 6
 *      `[3,4]` -> '11000' -> 24
 *      `[9,9]` -> '1000000000' -> 512
 *      Bitwise Left Shift ('<<') operator treats `a` and `b` as indices of bits.
 *      Bitwise OR ('|') operator accumulates 2 bits with bitmask.
 *      `[a, b]` and `[b, a]` have the same indices of bits (mask) without sorting and Min-Max calculation.
 * 
 * Frequency Map tracks the frequency of each `mask`.
 *      For each domino the current frequency `f` of `mask` represents the number of equal dominoes before 
 *      that can be paired with current domino.
 * 
 * Time: O(n)
 * Space: O(n)
 */
function numEquivDominoPairs(dominoes: number[][]): number {
    const freqMap = new Map<number, number>();
    let count = 0;

    for (const [a, b] of dominoes) {
        const mask = (1 << a) | (1 << b);
        const f = freqMap.get(mask) ?? 0;

        count += f;
        freqMap.set(mask, f + 1);
    }

    return count;
};
