function sequance(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let el = result.slice(-k);

        let sum = 0;
        for (const n of el) {
            sum += n;
        }
        result.push(sum);
        
    }
    console.log(result.join(' '));
}

sequance(8, 2);