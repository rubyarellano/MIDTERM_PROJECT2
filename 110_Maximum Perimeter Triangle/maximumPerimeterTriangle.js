function maximumPerimeterTriangle(sticks) {
    sticks.sort(function(a, b) {
        return a - b;
    });

    for (let i = sticks.length - 1; i >= 2; i--) {
        let a = sticks[i - 2];
        let b = sticks[i - 1];
        let c = sticks[i];

        if (a + b > c) {
            return [a, b, c]; 
        }
    }

    return [-1];
}
