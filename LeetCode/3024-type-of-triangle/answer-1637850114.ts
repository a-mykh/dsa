/**
 * Approach: Sort and If
 * 
 * Time: O(1) because the length of nums is always 3
 * Space: O(1)
 */
(() => {
    function triangleType(nums: number[]): string {
        const [a, b, c] = nums.sort((i, j) => i - j);

        if (a + b <= c) {
            return 'none';
        }

        if (a === c) {
            return 'equilateral';
        }

        if (a === b || b === c) {
            return 'isosceles';
        }

        return 'scalene';
    };
})();
