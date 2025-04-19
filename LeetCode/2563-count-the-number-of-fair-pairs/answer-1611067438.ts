/**
 * Approach: Binary Search with
 * - Sorting
 * - `for` loop
 * 
 * Per requirements `0 <= i < j < n`, index `i` should be less than index `j`.
 *      But the order of numbers doesn't change the sum: nums[i] + nums[j] = nums[j] + nums[i]
 *      And there's no limitation by subarrays, where position of subarray boundaries matters. Entire array is used.
 *      Hence it's possible to change the order of `nums` items, it's allowed to sort them.
 *      And sorted array enable us to use different techniques like Include-Exclude, Binary Search, Two Pointers, etc.
 * 
 * Iterating through `num` solution finds the number of elements in the rest of the array (starting from index i + 1) 
 *      that, when added to `num`, result in a sum within the [`lower`, `upper`] range.
 *      Built-in `Array.prototype.reduce` can be used for shorter code 
 *          but it has slightly lower performance in runtime (look at submission 1611066387).
 *      Binary Search is used to find lower and upper boundaries.
 *
 * Time: O(n*log(n)) because:
 *      - sorting step takes O(n*log(n))
 *      - Binary Search takes O(log(n)) and performed `n` times that results in O(n*log(n))
 * Space: O(n) due to potential temporary array creation by sorting algorithm for large input array
 */
function countFairPairs(nums: number[], lower: number, upper: number): number {
    nums.sort((a, b) => a - b);

    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const searchStart = i + 1;
        const left = findIndex(nums, lower - num, searchStart, true);
        const right = findIndex(nums, upper - num, searchStart, false);

        count += right - left;
    }

    return count;
};

function findIndex(arr: number[], val: number, low: number, isStrictMatch: boolean): number {
    let high = arr.length;

    while (low < high) {
        const mid = (low + high) >> 1;

        if (isStrictMatch ? arr[mid] < val : arr[mid] <= val) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
};
