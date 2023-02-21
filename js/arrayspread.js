const number = [2,4,1,9,3,5,26,7];
const number2 = [32,45,67];

// console.log(Math.min(...number))
// console.log(...number)

// const newArr = [123,21,24,32,...number2,...number]
// console.log(newArr);

const arr1 = [1,2,3,4,5];

const arr2 = [...arr1];

arr1.push(99)
arr2.push(55)

// console.log(arr1);
// console.log(arr2);

// destructuring 
const arr = [1,2,3,4,5,6,7];

const [first, second,...remaining] =arr;
// console.log(first, second);
// console.log(remaining);


// object things
const person1 = {
    name: 'herp alom',
    age: 34,
    phone: '02348',
    address: 'bari nai',
    p: [1,2,3,4]
}

// const person2 = {...person1};

// person2.isMale = true;
// console.log(person2)

// const {name, address }=person
// console.log(name, address);
// const {address:bari, name, age, phone, p} = person;
// console.log(name,age,phone)
// console.log(bari)
// let{name,address,...remain} = person;
// console.log(remain)

