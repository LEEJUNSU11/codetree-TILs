const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const [n , t] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);


let maxVal = 0;
let count = 0;

for ( let i = 0 ; i < n ; i ++ ) {
    if ( numbers[i] <= t ) {
        count = 0;
        continue;
    }
    count += 1;
    if ( count > maxVal ) {
        maxVal = count;
    }

}

console.log(maxVal)