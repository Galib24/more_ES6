class TeamMember{
    name;
    location;
    constructor(name, location){
        this.name = name;
        this.location = location;
    }
    provideFeedback(){
        console.log(` thank you for your feedback`)
    }

}




class Instructor extends TeamMember{
    designation = 'web course Instrustor'
    team = 'web team'
    constructor(name, location){
        super(name, location);
    }
    startSupportSession(time){
        console.log(`start the session at ${time}`)
    }
    creatQuize(module){
        console.log(`please create quiz for module ${module}`)
    }
    
}
// developer
class Developer extends TeamMember{
    designation = 'web course Instrustor'
    team = 'web team'
    constructor(name, location,tech){
       super(name, location);
        this.tech = tech;

    }
    developFeature(feature){
        console.log(`please develop the ${feature}`)
    }
    release(version){
        console.log(`please release the function ${version}`)
    }
   
}
// job placement team
class JobPlacement extends TeamMember{
    designation = 'Job placement commandos'
    team = 'Job Placement'
    region;
    constructor(name, location,region){
        super(name, location);
        this.region = region;

    }
    provideResume(feature){
        console.log(`please develop the ${feature}`)
    }
    prepareStudent(version){
        console.log(`please release the function ${version}`)
    }
}

const alia = new Developer('Alia Bhatt', 'Dhaka', 'React');
console.log(alia);
// alia.provideFeedback();

const bipasha = new JobPlacement('bipasha','kolkata','India');
console.log(bipasha);