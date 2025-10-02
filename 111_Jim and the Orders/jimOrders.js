function jimOrders(orders) {
    let result = [];

    for (let i = 0; i < orders.length; i++) {
        let orderTime = orders[i][0];
        let prepTime = orders[i][1];
        let deliveryTime = orderTime + prepTime;

        result.push([deliveryTime, i + 1]);
    }

    result.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1] - b[1]; 
        }
        return a[0] - b[0]; 
    });

    let answer = [];
    for (let i = 0; i < result.length; i++) {
        answer.push(result[i][1]);
    }

    return answer;
}
