//pulling from employee module
const employee = require('./employee')

//creating managers class
class Manager extends employee{
    constructor(id, name, email, officeNumber){
        super(id, name, email );
        this.officeNumber = officeNumber;
    }
        

        getRole(){
            return 'Manager';
        }

        
    
}
    
    

module.exports = Manager;