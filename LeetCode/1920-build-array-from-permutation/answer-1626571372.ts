/**
 * Approach: Iteration declarative
 *
 * Time: O(n)
 * Space: O(1)
 */
function buildArray(nums: number[]): number[] {
    return nums.map((i) => nums[i]);
};
