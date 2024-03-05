class Person{
    constructor(name,year){
        this.name=name;
        this.year=year;
    }

    age(){
        return 2024-this.year;
    }
} 



module.exports =Person;
