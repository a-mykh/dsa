/**
 * Finds the insertion point in sorted array `a` for given value `x`. 
 * It returns the index where `x` should be inserted to maintain the sorted order, 
 *      and if `x` is already present, it returns the index to the leftmost occurrence of `x`.
 * 
 * Time: O(log n)
 * 
 * @param a The sorted array to search within.
 * @param x The value to find the insertion point for.
 * @param lo The starting index of the search range (defaults to 0).
 * @param hi The ending index of the search range (defaults to the length of the array).
 * @returns index where `x` should be inserted.
 */
function bisectLeft<T>(a: T[], x: T, lo: number = 0, hi: number = a.length): number {
    while (lo < hi) {
      const mid = Math.floor((lo + hi) / 2);

      if (x <= a[mid]) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }

    return lo;
}

/**
 * Finds the insertion point in sorted array `a` for given value `x`. 
 * It returns the index where `x` should be inserted to maintain the sorted order, 
 *      and if `x` is already present, it returns the index to the rightmost occurrence of `x`.
 * 
 * Time: O(log n)
 * 
 * @param a The sorted array to search within.
 * @param x The value to find the insertion point for.
 * @param lo The starting index of the search range (defaults to 0).
 * @param hi The ending index of the search range (defaults to the length of the array).
 * @returns index where `x` should be inserted.
 */
function bisectRight<T>(a: T[], x: T, lo: number = 0, hi: number = a.length): number {
    while (lo < hi) {
      const mid = Math.floor((lo + hi) / 2);

      if (x < a[mid]) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }

    return lo;
  }
