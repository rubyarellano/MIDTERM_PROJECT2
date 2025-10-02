function luckBalance(k, contests) {
    let luck = 0;
    let important = [];

    for (let i = 0; i < contests.length; i++) {
        let luckValue = contests[i][0];
        let importance = contests[i][1];

        if (importance === 1) {
            important.push(luckValue); 
        } else {
            luck += luckValue; 
        }
    }

    important.sort((a, b) => b - a);

    for (let i = 0; i < important.length; i++) {
        if (i < k) {
            luck += important[i]; 
        } else {
            luck -= important[i]; 
        }
    }

    return luck;
}

