const numbers = [12,5,23,45,11,18,9,55,61,1];
const bignums = numbers.filter (number => number > 20);
// console.log(bignums);
const tiny = numbers.filter(n => n < 10);
// console.log(tiny);
const even = numbers.filter(num => num % 2 === 0);
// console.log(even);

const products = [
    {id:1, name: 'laptop', price: 45000},
    {id:1, name: 'Mobile', price: 85000},
    {id:1, name: 'Tablet', price: 35000},
    {id:1, name: 'Watch', price: 23000},
];
// const expensive = products.filter(product => product.price > 100000);
const expensive = products.filter(product => product.price  > 100);
console.log(expensive);