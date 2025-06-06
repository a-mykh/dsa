/**
 * Approach: Iteration
 *
 * Time: O(n)
 * Space: O(1)
 */
function buildArray2(nums: number[]): number[] {
    const n = nums.length;
    const ans = new Array<number>(n);

    for (let i = 0; i < n; i++) {
        ans[i] = nums[nums[i]];
    }

    return ans;
};
