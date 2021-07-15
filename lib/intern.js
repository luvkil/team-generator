//pull form employee module
const employee = require('./employee');

class intern extends employee{
    constructor(id, name, email, school){
        super(id, name, email);
        this.school = school;

    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return 'return';
    }
};

module.exports = intern;