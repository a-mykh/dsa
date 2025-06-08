(() => {
    /**
     * Approach: Depth-First Search (DFS)
     * 
     * The core idea to generate the numbers directly in lexicographical order 
     *      instead of generating all numbers from 1 to `n` and then sorting them.
     * 
     * DFS builds numbers digit by digit in depth-first manner.
     * `result.push(path)` is a base case and `visit` step in DFS.
     * Recursive `for` loop iterates through possible 0-9 and constructs the next number.
     * 
     * Time: O(n)
     * Space: O(1)
     */
    function lexicalOrder(n: number): number[] {
        const result: number[] = new Array<number>();

        function dfs(path: number): void {
            result.push(path);

            for (let i = 0; i < 10; i++) {
                const next = path * 10 + i;

                if (next > n) {
                    break;
                }

                dfs(next);
            }
        }

        for (let i = 1; i < 10; i++) {
            if (i > n) {
                break;
            }

            dfs(i);
        }

        return result;
    }
})();
