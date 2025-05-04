/**
 * Counts combinations of all items in array.
 * E.g.: array `[a, b, c]`
 *       has combinations `ab`, `bc`, `ac`.
 *       Expected result `3`
 * 
 * @param {[*]} arr 
 * @returns number of combinations
 */
function countCombinationsByTwoLoops(arr) {
    const n = arr.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            count++;
        }
    }

    return count;
}

function countCombinationsByOneLoop(arr) {
    const n = arr.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        count += n - i - 1;
    }

    return count;
}

function countCombinationsByFormula(arr) {
    const n = arr.length;

    return n * (n - 1) / 2;
}
