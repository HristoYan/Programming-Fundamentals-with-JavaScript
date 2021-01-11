function solve(string, num) {
    let result = repString(string, num);
    console.log(result);
    
    function repString(str, n) {
        let result = '';
        for(let i = 0; i < n; i++) {
            result += str;
        }
        return result;
        
    }
}

solve('String', 2);