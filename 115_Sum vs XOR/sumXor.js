function sumXor(n) {
    if (n === 0) return 1;

    let countZeroBits = 0;

    while (n > 0) {
        if ((n & 1) === 0) { 
            countZeroBits++;
        }
        n = Math.floor(n / 2); 
    }

    return Math.pow(2, countZeroBits);
}