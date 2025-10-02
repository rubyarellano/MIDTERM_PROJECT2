function maximizingXor(l, r) {
    let maxXor = 0;

    for (let a = l; a <= r; a++) {
        for (let b = a; b <= r; b++) {
           
            let xorValue = a ^ b;

            if (xorValue > maxXor) {
                maxXor = xorValue;
            }
        }
    }

    return maxXor;
}
