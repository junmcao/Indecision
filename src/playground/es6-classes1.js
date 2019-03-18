// car class

class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi, I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person{
    constructor(name, age, major) {
        super(name, age); //calls parent constructor
        this.major = major;

    }

    hasMajor() {
        return !!this.major;
    }
    
    getDescription() {
        let description = super.getDescription();
        
        if (this.hasMajor()){
            description += ` Their major is ${this.major}.`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, location){
        super(name, age);
        this.location = location;
    }

    hasLocation(){
        return !!this.location;
    }

    getDescription(){
        let description = super.getDescription();

        if(this.hasLocation()){
            description += ` Their home location is ${this.location}`;
        }
        return description;
    }
}

const me = new Traveler('Jun Cao', 21, "Toronto");
console.log(me.getDescription());    

const other = new Traveler();
console.log(other.getDescription());