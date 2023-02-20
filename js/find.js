const numbers = [12,5,23,45,11,18,9,55,61,1];
const fives = numbers.find(num => num % 5 === 0)
const fivesall = numbers.filter(num => num % 5 === 0)
// console.log(fives);
// console.log(fivesall);
const products = [
    {id:1, name: 'laptop', price: 65000},
    {id:1, name: 'Mobile', price: 80000},
    {id:1, name: 'Tablet', price: 30000},
    {id:1, name: 'Watch', price: 23000},
];
const cheap = products.find(product => product.price < 40000)
console.log(cheap);
