//pull from employee module
const employee = require('./employee');

class engineer extends employee{
    constructor(id, name, email, github){
        super(id, name, email);
        this.github = github;
    }

    gitHub(){
       return  this.github;
    }

    getRole(){
        return 'engineer';
    }
};

module.exports = engineer;