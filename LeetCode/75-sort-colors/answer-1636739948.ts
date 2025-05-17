/**
 * Approach: Three Pointers with
 * - Single Pass
 * - Swapping
 * - In-place Sorting
 * 
 * Pointer 'i' (iterator) iterates unsorted array to examine each value.
 * Pointer 'pL' (pointer left) is the boundary between `0` and `1` parts of sorted array.
 * Pointer 'pR' (pointer right) is the boundary between `1` and `2` parts of sorted array.
 * Iteration swaps colors in-place and updates pointers positions.
 * 
 * Time: O(n)
 * Space: O(1)
 */
function sortColors(nums: number[]): void {
    let i = 0, pL = 0, pR = nums.length - 1;

    while (i <= pR) {
        if (nums[i] == 0) {
            [nums[pL++], nums[i++]] = [nums[i], nums[pL]];
        } else if (nums[i] == 2) {
            [nums[i], nums[pR--]] = [nums[pR], nums[i]];
        } else i++;
    }
};
