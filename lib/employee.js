class Employee {
    constructor  (name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
    };
    
    getName() {
        return this.name;
    };
    
    getId () {
        return this.id;
    };

    getRole () {
        return "Employee";
    };
    getEmail () {
        return this.email;
    };


};

//get id
//get role
//get email
//const jerry = new Employee("Jerry", "4", "jerry2scray@gmail.com")
//console.log(jerry.getName(), jerry.getId(), jerry.getRole(), jerry.getEmail());
module.exports = Employee