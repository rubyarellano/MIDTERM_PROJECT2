function decentNumber(n) {
    let fives = n;

    while (fives % 3 !== 0) {
        fives -= 5;
    }
    if (fives < 0) {
        console.log(-1);
        return;
    }

    let threes = n - fives;

    let result = "5".repeat(fives) + "3".repeat(threes);
    console.log(result);
}