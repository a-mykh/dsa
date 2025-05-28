/**
 * Approach: Traversal
 * 
 * Time: O(n)
 * Space: O(1)
 */
(() => {
    function differenceOfSums(n: number, m: number): number {
        let diff = 0;

        for (let i = 1; i <= n; i++) {
            if (i % m === 0) {
                diff -= i;
            } else {
                diff += i;
            }
        }

        return diff;
    };
})();
