/**
 * Approach: Iteration with Frequency Counter
 * 
 * `36` is the max possible sum of all digits when `n <= 10^4`. 9999 is the number with that sum.
 * That's why 37 items is enough for frequency counter.
 * 
 * The solution avoids type conversion from number to string for better performance.
 * 
 * Declarative approach with built-in `filter` runs faster in this case than imperative one with `for` loop.
 * 
 * Time: O(n*log(n))
 * Space: O(1)
 */
function countLargestGroup(n: number): number {
    let maxSize = 1;
    const freqCounter = new Array<number>(37).fill(0);

    for (let i = 1; i <= n; i++) {
        let dSum = 0;

        for (let j = i; j > 0; j = j / 10 >> 0) {
            dSum += j % 10;
        }

        const size = ++freqCounter[dSum];

        if (size > maxSize) {
            maxSize = size;
        }
    }

    return freqCounter.filter((v) => v === maxSize).length;
};
