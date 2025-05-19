/**
 * Approach: Sort and Set
 * 
 * Time: O(1) because the length of nums is always 3
 * Space: O(1)
 */
(() => {
    function triangleType(nums: number[]): string {
        const types = ['none', 'equilateral', 'isosceles', 'scalene'];
        const [a, b, c] = nums.sort((i, j) => i - j);

        if (a + b > c) {
            return types[new Set<number>(nums).size];
        }

        return types[0];
    };
})();
