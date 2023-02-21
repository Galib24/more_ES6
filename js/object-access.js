const person = {
    name: 'abul',
    age: 23,
    contact:{
        phone: "01723",
        email: 'abul@gmail.com'
    },
    education:{
        achoolName: 'bn school',
        subject:[
            {name: 'bangla', mark:45},
            {name: 'english', mark:64},
            {name: 'math', mark:45},
        ]
    }
}
console.log(person.education.subject[1].mark)
// access object
// const age = person.age
// const age = person['age']
const property = 'age'
const age = person[property]
// console.log(age)