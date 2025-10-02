function largestPermutation(k, arr) {
    let n = arr.length;

    let pos = {};
    for (let i = 0; i < n; i++) {
        pos[arr[i]] = i;
    }
    for (let i = 0; i < n && k > 0; i++) {
        let maxNum = n - i;       
        if (arr[i] !== maxNum) {
           
            let idx = pos[maxNum];

            [arr[i], arr[idx]] = [arr[idx], arr[i]];

            pos[arr[idx]] = idx;
            pos[arr[i]] = i;

            k--;
        }
    }

    return arr;
}