/**
 * Approach: Prefix Sum with
 * - Modulo Arithmetic
 * - Hash Map
 * 
 * Solution keeps track of running count of "special" numbers as it goes through the `nums` array 
 *      to avoid checking every subarray directly. For each position it checks 
 *      how many previous positions would create an "interesting" subarray ending at current position 
 *      by using the information from `prefixCounts`.
 * 
 * The keys of `prefixCounts` are reminders of these counts and the values are frequency of them.
 * 
 * ? why `prefixCounts.set(0, 1)`
 * For the case, where the `interesting` subarray starts at index `0`, `l = 0` and `l - 1 = -1`.
 *      What is `prefix[-1]`? It represents the prefix count before we process any elements, which is `0`. 
 *      For subarrays starting at index `0` to be counted correctly, we need the case 
 *          where `prefix[l-1]` (which is `prefix[-1]`) is `0`.
 * 
 * ? why `modulo` is added in `prefix - k + modulo`
 * This is to handle potential negative results from the subtraction `prefix - k`. E.g. `-1 % 3 = -1`
 *      We need non-negative remainder when calculating the target prefix value to look up in the `prefixCounts`.
 *      A negative key would lead to incorrect lookups.
 * 
 * Time: O(n) because it iterates through the array once
 * Space: O(modulo)
 */
function countInterestingSubarrays(nums: number[], modulo: number, k: number): number {
    const n = nums.length;
    const prefixCounts = new Map<number, number>();
    let count = 0;
    let prefix = 0;

    prefixCounts.set(0, 1)

    for (let i = 0; i < n; i++) {
        prefix += nums[i] % modulo === k ? 1 : 0;
        count += prefixCounts.get((prefix - k + modulo) % modulo) ?? 0;
        prefixCounts.set(prefix % modulo, (prefixCounts.get(prefix % modulo) ?? 0) + 1);
    }

    return count;
};
