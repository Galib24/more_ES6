const users = [{id: 1, name: 'abul', job: 'doctor'}]
// console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        {id:1, name: 'babul',  job:'leader'},
        {id:2, name: 'dabul',  job:'leader'},
    ]
}
const firstJob = data.data[1].name;
// console.log(firstJob);

const user = {
    id: 5001,
    name: 'alva adison',
    address: {
        street:{
            first: '35/A kochukhet lane',
            second: 'third floor',
            third: 'right side'
        },
        postoffice: 'cantonment',
        city: 'Dhaka'
    }
}
const userFloor = user.address.street.second;
console.log(userFloor);