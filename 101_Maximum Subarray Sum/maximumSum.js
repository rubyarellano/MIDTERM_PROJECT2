function maximumSum(a, m) {
    let prefix = 0;
    let maxSum = 0;
    let prefixSet = [];

    for (let i = 0; i < a.length; i++) {
        prefix = (prefix + a[i]) % m;
        maxSum = Math.max(maxSum, prefix);

        let idx = lowerBound(prefixSet, prefix + 1);
        if (idx < prefixSet.length) {
            maxSum = Math.max(maxSum, (prefix - prefixSet[idx] + m) % m);
        }
        insertSorted(prefixSet, prefix);
    }

    return maxSum;
}

function lowerBound(arr, target) {
    let low = 0, high = arr.length;
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] < target) low = mid + 1;
        else high = mid;
    }
    return low;
}

function insertSorted(arr, value) {
    let idx = lowerBound(arr, value);
    arr.splice(idx, 0, value);
}
