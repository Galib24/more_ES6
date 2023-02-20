// syntatics sugar
class Instrustor{
    name;
    designation = 'web course Instrustor'
    team = 'web team'
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;

    }
    startSupportSession(time){
        console.log(`start the session at ${time}`)
    }
    creatQuize(module){
        console.log(`please creat quize for module ${module}`)
    }
}
const amir = new Instrustor('maruf', 'mumbai');
console.log(amir);
amir.startSupportSession('9.00');
amir.creatQuize(60);

const solaiman = new Instrustor('solaiman', 'Dhaka')
console.log(solaiman);