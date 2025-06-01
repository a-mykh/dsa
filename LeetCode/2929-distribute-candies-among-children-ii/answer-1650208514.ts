/**
 * Approach: Enumeration with Range Intersection
 * 
 * `min` represents the minimum number of candies the first child must have 
 *      if other 2 children are given their maximum allowed candies.
 * `max` represents the maximum number of candies the first child can have.
 * 
 * The code iterates through all possible candy counts for the first child `i`.
 * After the first child takes `i` candies, `reminder` is the number of candies left for other 2 children.
 * 
 * `adjMin` and `adjMax` is used to find intersection of allowed ranges for the second child's candies.
 * 
 * This approach is applicable only for small constraints. 
 *      For larger constraints combinatorial approach Inclusion-Exclusion Principle should be used.
 * 
 * Time: O(min(n, limit))
 * Space: O(1)
 */
(() => {
    function distributeCandies(n: number, limit: number): number {
        const m = n - limit * 2;
        const min = m > 0 ? m : 0;
        const max = limit > n ? n : limit;

        let result = 0;

        for (let i = min; i <= max; i++) {
            const reminder = n - i;
            const adjMin = reminder - max > min ? reminder - max : min;
            const adjMax = reminder - min < max ? reminder - min : max;

            result += adjMax - adjMin + 1;
        }

        return result;
    };
})();
