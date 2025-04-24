/**
 * Approach: Sliding Window with Frequency Array
 * 
 * The core of solution is to use 2 pointers `pL` and `pR` which define a "window".
 * The right pointer `pR` expands the window to the right. 
 * The left pointer `pL` contracts the window from the left when a "complete" subarray is found.
 * 
 * Frequency Array `freq` tracks the count of each element within the current window.
 *      It's similar to Bitmask/Bitset approach.
 * 
 * When a "complete" subarray is found, any subarray extending from `pR` to the end of the array
 *      will also be "complete", because it will still contain all the distinct elements.
 * 
 * Time: O(n) because of single pass through the array by both pointers of window
 * Space: O(n) for frequency map
 */
function countCompleteSubarrays(nums: number[]): number {
    const n = nums.length;
    const distItemCount: number = new Set(nums).size;

    const freq: number[] = new Array(2001).fill(0);
    let subArrCount = 0;
    let winDistItemCount = 0;

    for (let pL = 0, pR = 0; pR < n; pR++) {
        if (freq[nums[pR]]++ === 0) {
            winDistItemCount++;
        }

        while (pL <= pR && winDistItemCount === distItemCount) {
            subArrCount += n - pR;

            if (--freq[nums[pL]] === 0) {
                winDistItemCount--;
            }

            pL++;
        }
    }

    return subArrCount;
};
