/**
 * Approach: Enumeration (brute-force)
 * 
 * Time: O(n³)
 * Space: O(1)
 */
function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
    const n = arr.length;
    let count = 0;

    for (let i = 0; i < n - 2; i++) {
        const ci = arr[i];

        for (let j = i + 1; j < n - 1; j++) {
            const cj = arr[j];

            if (Math.abs(ci - cj) > a) {
                continue;
            }

            for (let k = j + 1; k < n; k++) {
                const ck = arr[k];
                const jk = Math.abs(cj - ck);
                const ik = Math.abs(ci - ck);

                if (jk <= b && ik <= c) {
                    count++;
                }
            }
        }
    }

    return count;
};
