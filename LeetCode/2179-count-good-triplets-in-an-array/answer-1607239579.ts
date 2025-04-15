/**
 * Approach: Policy Based Data Structure with:
 * - Hash Map
 * - Binary search
 * 
 * Time: O(n²), because of Array.splice inside of `for` loop
 * Space: O(n)
 */
function goodTriplets(nums1: number[], nums2: number[]): number {
    const n = nums2.length;
    const nums2IndicesMap = new Map<number, number>();

    for (let i = 0; i < n; i++) {
        nums2IndicesMap.set(nums2[i], i);
    }

    function findIndex(arr: number[], val: number): number {
        let left = 0;
        let right = arr.length;

        while (left < right) {
            const mid = (left + right) >> 1;

            if (arr[mid] < val) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    }

    let count = 0;
    const sortedIndices: number[] = [];

    for (const num of nums1) {
        const nums2Idx = nums2IndicesMap.get(num)!;
        const left = findIndex(sortedIndices, nums2Idx);
        const right = (n - 1 - nums2Idx) - (sortedIndices.length - left);

        count += left * right;
        sortedIndices.splice(left, 0, nums2Idx);
    }

    return count;
};
