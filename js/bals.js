// default paremeter
function calculateSalary(salary, tax=0.25, bonus=0){
    const remaining = salary - salary*tax;
    const total = remaining + bonus;
    return total;
}
// template string
