// const array = [1, 3, 5, 7, 9]

// first problem
const even = [1, 3, 5, 7, 9].map(a => a+1);
// console.log(even);

// second filter
const numbers = [33,50,79,78,90,101,30];
const divideAble = numbers.filter(num => num % 10 === 0);
// console.log(divideAble);


// with find third
const divideAble2 = numbers.find(num => num % 10 === 0)
// console.log(divideAble2);

// fourth 
const num = [1, 9, 17, 22];
const total = num.reduce((previous, current) =>{
    // console.log(previous, current);
    // return previous + current;
}, 0 )
// console.log(total);

// fifth 
// const people = [
//     {name: 'Meena', age: 20},
//     {name: 'Rina', age: 15},
//     {name: 'Suchorita', age: 22}
// ];
// const total2 = people.reduce((previous, age)=>{
//  return previous + age;
// }, 0)
// console.log(total2);

// 6th 
const student = {
    name: 'Fredie',
    age: 26,
}
// console.log(student.age);

// 7th 
let data = {
    location: [
        {
            latitude: '34.5, 37.8',
            longitude: '98.77, 58.7',
            city: 'Hyderabad',
            country: 'India',
        }
    ]
};
// console.log(data.location[0].city)

// const obj = {foo: 1};
// obj.bar =2;
// console.log(bar);

// function min(nums){ 
//     return Math.min(nums) 
//   }
//   console.log(min( [1,3,2 ]))

// const cube=x=> x*x*x; 
// console.log(cube(2))

// const [a, b] = [1,2,3,4,45,5]; 
// console.log(a+b);

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);