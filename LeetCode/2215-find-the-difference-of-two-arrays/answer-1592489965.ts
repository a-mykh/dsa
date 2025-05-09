/**
 * Approach: Set with declarative filter
 * 
 * `Set` object stores unique values only that allows to get distinct integers.
 * Opposite sets filtering gives the difference between arrays of integers.
 * `Set.prototype.difference()` is available for new versions of browsers (June 2024)
 * 
 * Time: O(n)
 * Space: O(n)
 */
function findDifference(nums1: number[], nums2: number[]): number[][] {
    const set1 = new Set<number>(nums1);
    const set2 = new Set<number>(nums2);

    return [
        Array.from(set1).filter((num) => !set2.has(num)),
        Array.from(set2).filter((num) => !set1.has(num)),
    ];
};
