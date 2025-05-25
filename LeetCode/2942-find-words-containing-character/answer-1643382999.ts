/**
 * Approach: Declarative Simulation
 * 
 * Time: O(n*m) where `n` and `m` are lengths of array and word accordingly
 * Space: O(1) because returned `indices` is excluded from calculation
 */
(() => {
    function findWordsContaining(words: string[], x: string): number[] {
        return words.reduce((acc: number[], w: string, i: number) => {
            if (w.includes(x)) {
                acc.push(i);
            };

            return acc;
        }, new Array<number>());
    };
})();
