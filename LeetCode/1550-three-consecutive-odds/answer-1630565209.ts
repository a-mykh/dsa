/**
 * Approach: Imperative with
 * - State Management (Counter)
 * - Reminder (%)
 * 
 * Time: O(n)
 * Space: O(1)
 */
function threeConsecutiveOdds2(arr: number[]): boolean {
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            counter = 0;
            continue;
        }
        
        counter++;
        
        if (counter === 3) {
            return true;
        }
    }

    return false;
};
