/**
 * Approach: Simulation with
 * - imperative `for`
 * - Two Pointers
 * 
 * Time: O(n*m) where `n` and `m` are lengths of array and word accordingly
 * Space: O(1) because returned `indices` is excluded from calculation
 */
(() => {
    function findWordsContaining(words: string[], x: string): number[] {
        const indices: number[] = [];

        for (let i = 0, j = words.length - 1; i <= j; i++, j--) {
            const iW = words[i];

            for (let iL = 0, iR = iW.length - 1; iL <= iR; iL++, iR--) {
                if (iW[iL] === x || iW[iR] === x) {
                    indices[indices.length] = i;
                    break;
                }
            }

            if (i !== j) {
                const jW = words[j];

                for (let jL = 0, jR = jW.length - 1; jL <= jR; jL++, jR--) {
                    if (jW[jL] === x || jW[jR] === x) {
                        indices[indices.length] = j;
                        break;
                    }
                }
            }
        }

        return indices;
    };
})();
