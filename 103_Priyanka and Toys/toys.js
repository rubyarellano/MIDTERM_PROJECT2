function toys(w) {
    w.sort((a, b) => a - b);

    let count = 0;      
    let i = 0;          

    while (i < w.length) {
        let minWeight = w[i]; 
        count++;               
        i++;                   

        while (i < w.length && w[i] <= minWeight + 4) {
            i++;
        }
    }

    return count;
}
