/**
 * Approach: Iteration with stored positions of max element appearance.
 * 
 * Array `positions` is used to track positions of where the maximum element appears
 *      instead of checking every possible subarray.
 * 
 * If the `maximum` element has appeared at least `k` times, it means that any subarray 
 *      ending at the current index `i` and 
 *      starting at or after the index of `positions.at(-k)` occurrence of the maximum element 
 *      will satisfy the condition.
 * 
 * ? Why the `+ 1` in `positions.push(i + 1)`
 * It stores 1-based indices in the array. 
 * `positions.at(-k)` directly gives the count of valid starting positions for subarrays ending at the current index. 
 * 
 * Time: O(n) because of single pass through the `nums` in both `Math.max` and `for` loop
 * Space: O(n) for `positions`
 */
function countSubarrays0(nums: number[], k: number): number {
    const maximum = Math.max(...nums);
    const positions: number[] = [];
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === maximum) {
            positions.push(i + 1);
        }

        if (positions.length >= k) {
            count += positions.at(-k)!;
        }
    }

    return count;
};
