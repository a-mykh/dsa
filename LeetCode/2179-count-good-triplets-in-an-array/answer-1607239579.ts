/**
 * Approach: Policy Based Data Structure with:
 * - Hash Map for fast lookups of indices in `nums2`
 * - Binary search to find the insertion point in a sorted list of indices
 * - Combinatorial Counting based on the relative positions of indices in sorted list 
 *      to determine the number of good triplets
 * 
 * Hash Map `nums2IndicesMap` is used to transform `nums2` array to dictionary with array item value as a key, e.g.:
 *      [4,1,0,2,3] -> {4:0, 1:1, 0:2, 2:3, 3:4}
 *      Note, array values are permutations array indices. This also means the value are unique.
 *      Later the map is used for quick retrieval of the index of specific value from `nums2`.
 * 
 * The code iterates through each number `num` in `nums1`.
 *      `sortedIndices` maintains a sorted list of the indices from `nums2` 
 *          that correspond to the elements processed from `nums1`.
 *      Current `num` is considered as a middle element of a good triplet.
 *      `left` is a number of elements that are smaller than the current `nums2Idx`.
 *          These represent the potential first elements of a good triplet. 
 *          Their corresponding values in `nums1` appeared earlier and had a smaller index in `nums2`.
 *      `right` is a number of elements in `nums2` that have a larger index than the current `nums2Idx` 
 *          and whose corresponding values in `nums1` have not yet been encountered. 
 *          Their indices are not yet in `sortedIndices`. 
 *          These represent the potential third elements of a good triplet.
 *      The product of `left` and `right` gives the number of good triplets 
 *          that can be formed with the current element as the middle element.
 *      `Array.prototype.slice` is used to ensure that sortedIndices remains sorted, 
 *          which is essential for binary search.
 * 
 * Time: O(n²), because:
 *      - O(n) to build nums2IndicesMap,
 *      - O(n*log(n)) for main loop (without splice) due to Binary Search O(log(n)) performed `n` times
 *      - O(n²) for Array.prototype.splice in main loop when `n` is large. `slice` takes O(n) by itself
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
