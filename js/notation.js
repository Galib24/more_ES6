const student = {
    name: 'baliudin',
    age: 15,
    class: 'ten',
    marks: {
        math: 78,
        phy: 89,
        chem:60
    },

}
const marks = student.marks;
const math = student.marks.math;

const chem = student['marks']['chem'];
const sub = 'math';
const subjectMarks = student.marks[math];
console.log(subjectMarks);