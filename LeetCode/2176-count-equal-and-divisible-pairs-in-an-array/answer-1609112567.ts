/**
 * Approach: HashMap
 * 
 * Storing the indices of each number to avoid redundant searches.
 * 
 * Time: O(n²)
 * Space: O(n)
 */
function countPairs(nums: number[], k: number): number {
    const numIndicesMap = new Map<number, number[]>();
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const indices = numIndicesMap.get(num);

        if (indices) {
            for (const idx of indices) {
                if (idx * i % k === 0) count++;
            }

            indices.push(i);
        } else {
            numIndicesMap.set(num, [i]);
        }
    }

    return count;
};
