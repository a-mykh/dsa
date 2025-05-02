/**
 * Approach: Two Pointers
 * 
 * `prevIdx` and `i` variables (Two Pointers) define boundaries for segments 
 *      of non-pushed dominoes '.' between 2 pushed dominoes 'L' and 'R'.
 * 
 * `prevIdx` tracks the index of the last pushed domino.
 * 
 * `i` iterates through `dominoes` from left to right:
 *      - initial `prevIdx = -1` and `prevForce = 'L'` handle the case 
 *          when string starts with non-pushed '.' dominoes (e.g. '..L..')
 *          The first 'L' sets preceding '.' to 'L' in this case. ('..L..' -> 'LLL..')
 *      - if previous domino and current domino are pushing in the same direction `if (prevForce === force)` 
 *          (e.g. '.L..L.' or '.R..R.'), 
 *          set all '.' between them to the common force 'L' or 'R' ('.LLLL.' or '.RRRR.')
 *      - for opposite direction `if (prevForce === 'R' && force === 'L')` (e.g. '..R..L..')
 *          simulate forces meeting in the middle,
 *          setting left-side elements to 'R' force and right-side element to 'L' force ('..RRLL..').
 *          In case of odd number of non-pushed elements, the middle domino will remain '.' ('..R...L..' -> '..RR.LL..')
 *              because of balanced forces.
 *      - one more iteration `for (...; i <= n; ...)` is added 
 *          to handle the case with trailing '.' dominoes after 'R' push (e.g. '..R..')
 *          Set all trailing '.' to 'R' in this case. ('..R..' -> '..RRR')
 * 
 * Time: O(n)
 * Space: O(n)
 */
function pushDominoes(dominoes: string): string {
    const n = dominoes.length;
    const domArray = dominoes.split('');
    let prevIdx = -1;
    let prevForce = 'L';

    for (let i = 0; i <= n; i++) {
        const force = i < n ? domArray[i] : 'R';

        if (force === '.') {
            continue;
        }

        if (prevForce === force) {
            for (let j = prevIdx + 1; j < i; j++) {
                domArray[j] = force;
            }
        } else if (prevForce === 'R' && force === 'L') {
            for (let pL = prevIdx + 1, pR = i - 1; pL < pR; pL++, pR--) {
                domArray[pL] = 'R';
                domArray[pR] = 'L';
            }
        }

        prevForce = force;
        prevIdx = i;
    }

    return domArray.join('');
};
