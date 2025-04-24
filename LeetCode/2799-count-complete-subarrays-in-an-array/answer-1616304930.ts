/**
 * Approach: Sliding Window with Frequency Map (Hash Map)
 * 
 * The core of solution is to use 2 pointers `numL` and `right` which define a "window".
 * The right pointer `right` expands the window to the right until the window contains all distinct elements.
 * The left pointer `numL` contracts the window from the left for each non-first iteration of outer loop.
 * The `previousL` variable helps in updating the `freqMap` as the left boundary moves.
 * 
 * Frequency Map `freqMap` tracks the count of each element within the current window.
 * 
 * When a "complete" subarray is found, any subarray extending from `pR` to the end of the array 
 *      will also be "complete", because it will still contain all the distinct elements.
 * 
 * Time: O(n) because of single pass through the array by both pointers of window
 * Space: O(n) for frequency map
 */
function countCompleteSubarrays3(nums: number[]): number {
    const n = nums.length;
    const distItemCount = new Set(nums).size;
    let freqMap = new Map<number, number>();
    let count = 0;
    let right = 0;
    let previousL = -1;

    for (const numL of nums) {
        if (previousL > -1) {
            freqMap.set(previousL, freqMap.get(previousL)! - 1);

            if (freqMap.get(previousL) === 0) {
                freqMap.delete(previousL);
            }
        }

        while (right < n && freqMap.size < distItemCount) {
            freqMap.set(nums[right], (freqMap.get(nums[right]) ?? 0) + 1);
            right++;
        }

        if (freqMap.size === distItemCount) {
            count += n - right + 1;
        }

        previousL = numL;
    }

    return count;
};
