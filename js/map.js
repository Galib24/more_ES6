const numbers = [2, 8, 4, 6, 3];

// console.log(output);
function getdouble() {
    const output = [];
    for (const number of numbers) {
        // function call
        const doubled = doubleIt(number); 
        output.push(doubled);
    }
    return output;
}

function doubleItold(number){
    return number*2;
}
const doubleIt = num => num *2;

// map
const makedouble = numbers.map(doubleIt);
// map with direct
const makedoubleDirect = numbers.map(num => num*2);
console.log(makedoubleDirect);
// map with operation
const fiveTiems = [1,2,3,4,5].map(x => x * 5);
console.log(fiveTiems);

const result = getdouble(numbers);
// console.log(result);
// console.log(makedouble);
