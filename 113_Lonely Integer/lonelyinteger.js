function lonelyinteger(a) {
    for (let i = 0; i < a.length; i++) {
        let count = 0;

        for (let j = 0; j < a.length; j++) {
            if (a[i] === a[j]) {
                count++;
            }
        }
        if (count === 1) {
            return a[i];
        }
    }
}

