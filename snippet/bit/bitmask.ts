(function () {
    /**
     * Encode word in bitmask with keeping the order of letters.
     * 5-bit mask is created for each character.
     * 26 possible lowercase English letters and 5 bits are sufficient for each character (2^5 = 32 > 26).
     * Characters bitmasks are combined to word bitmask.
     * 
     * Example 1 with word 'abc':
     * 'a'.toString(2); // '1'
     * 'b'.toString(2); // '10'
     * 'c'.toString(2); // '11'
     * encodeWordToBitmask('ab').toString(2); // '1000001' = '10' + '00001'
     * encodeWordToBitmask('abc').toString(2); // '110001000001' = '11' + '00010' + '00001'
     * 
     * Example 2 with word 'foo':
     * 'f'.toString(2); // '110'
     * '0'.toString(2); // '1111'
     * encodeWordToBitmask('fo').toString(2); // '111100110' = '1111' + '00110'
     * encodeWordToBitmask('foo').toString(2); // '11110111100110' = '1111' + '01111' + '00110'
     */
    function encodeWordToBitmask(word: string): bigint {
        const A_CODE = 97;
        let wordMask = 0n;
        
        for (let i = 0; i < word.length; i++) {
            const charMask = BigInt(word.charCodeAt(i) - A_CODE + 1) << BigInt(5 * i);
            
            wordMask |= charMask;
        }
        
        return wordMask;
    }
}());
