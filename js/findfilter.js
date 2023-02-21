const numbers = [12,32,25,75,13,54,97,25];
const names = ['abul', 'babul', 'kabul','dadul']

// const x = numbers.find((n) => n >= 50)
const x = numbers.filter((n) => n >= 50)
// console.log(x);

const student = [
    {name:'babull', email: 'babul@gmail.com', avg: 32, fiftyPercent:true},
    {name:'kabull', email: 'babul@gmail.com', avg: 32, fiftyPercent:true},
    {name:'mabull', email: 'babul@gmail.com', avg: 32, fiftyPercent:true},
    {name:'labull', email: 'babul@gmail.com', avg: 32, fiftyPercent:true},
    {name:'wabull', email: 'babul@gmail.com', avg: 22, fiftyPercent:true},
    {name:'aabull', email: 'babul@gmail.com', avg: 42, fiftyPercent:true},
    {name:'cabull', email: 'babul@gmail.com', avg: 42, fiftyPercent:true},
    {name:'qabull', email: 'babul@gmail.com', avg: 57, fiftyPercent:true}
]

// const scic = student.filter(s => s.avg >= 50 && s.fiftyPercent === true)
// const names = scic.map((st) => st.name)
// console.log(names);