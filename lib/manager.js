//pulling from employee module
const Employee = require('./employee')

//creating managers class
class Manager extends Employee{
    constructor(id, name, email, officeNumber){
        super(id, name, email );
        this.officeNumber = officeNumber;
    }

        getOfficeNumber() {
            return this.officeNumber;
        }

        getRole(){
            return 'Manager';
        }

}


 
/*
teamMembers.forEach(myFunction);

function myFunction(item) {

    console.log(item);
}*/


module.exports = Manager;