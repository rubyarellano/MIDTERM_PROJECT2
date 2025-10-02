function maximumToys(prices, k) {
    prices.sort((a, b) => a - b);

    let totalMoney = 0;   
    let count = 0;       

    for (let i = 0; i < prices.length; i++) {
        if (totalMoney + prices[i] <= k) {
            totalMoney += prices[i]; 
            count++;                  
        } else {
            break; 
        }
    }

    return count; 
}

