const numbers = [12,56,87,44];
const half = numbers.map(n => n/2);
const thirds = numbers.map(n => n/3);
// console.log(half);
// console.log(thirds);
const firends = ['Tom Hanks','Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const firstLetter = firends.map(f => f[0]);
// console.log(firstLetter);
const nameLengths = firends.map(f => f.length);
// console.log(nameLengths);

const products = [
    {id:1, name: 'laptop', price: 45000},
    {id:1, name: 'Mobile', price: 85000},
    {id:1, name: 'Tablet', price: 35000},
    {id:1, name: 'Watch', price: 23000},
];
// const items = products.map(product => console.log(product.name))
const items = products.map(product => product.name);
// console.log(items);
const prices = products.map(p => p.price);
console.log(prices);