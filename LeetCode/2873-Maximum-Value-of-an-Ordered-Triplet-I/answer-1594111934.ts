// Approach: Greedy with single traversal
// Time: O(n)
// Space: O(1)
function maximumTripletValue(nums: number[]): number {
    let maxK = 0;
    let maxDiff = 0;
    let maxV = 0;

    for (let i = 0; i < nums.length; i++) {
        maxV = Math.max(maxV, maxDiff * nums[i]);
        maxDiff = Math.max(maxDiff, maxK - nums[i]);
        maxK = Math.max(maxK, nums[i]);
    }

    return maxV;
};
