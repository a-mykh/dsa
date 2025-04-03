/**
 * Approach: Greedy with single traversal
 * 
 * The algotithm uses the idea of iteratively updating a maximum value as it traverses the input.
 * While the idea is similar to Kadane's algorithm
 *   (which is is specifically designed to find the maximum sum of a contiguous subarray within a one-dimensional array),
 * this solution is not finding a contiguous subarray, because it's based on a specific formula that utilizes the maximum values.
 * 
 * Time: O(n)
 * Space: O(1)
 */
function maximumTripletValue2(nums: number[]): number {
    let maxV = 0;
    let maxDiff = 0;
    let maxK = 0;

    /**
     * The loop iterates through the nums array from left to right.
     * The calculations are performed in the backward order.
     * Because we want to use the values from previous iteration before they are updated.
     * This approach helps traverse the input with single loop and avoid additional calculation with "i" inside each iteration.
     */ 
    for (let i = 0; i < nums.length; i++) {
        maxV = Math.max(maxV, maxDiff * nums[i]);       // the 3rd part of the triplet calculation.
        maxDiff = Math.max(maxDiff, maxK - nums[i]);    // the 2nd part of the triplet calculation.
        maxK = Math.max(maxK, nums[i]);                 // the 1st part of the triplet calculation.
    }

    return maxV;
};
