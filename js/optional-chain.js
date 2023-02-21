const petOwner = {
    name: 'abul',
    contact:{
        phone: '0233',
        email: 'ag@gmail.com'
    },
    pet:{
        name:'lofi',
        info: {
            color: 'black',
            weight: '1.3kg'
        },
    },
};
console.log(petOwner?.dog?.name)