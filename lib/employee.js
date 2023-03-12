class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = emai;
    }
    getNames(){
        return this.name;
    }
    getID(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }
}

module.exports = Employee;