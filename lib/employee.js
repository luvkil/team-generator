class employee{
    constructor(id, name, email){
        this.id = id;
        this.name = name;
        this.email = email;
    }

    getId(){
        return `${this.name}`;
    }
    getName(){
        return `${this.name}`
    }
    getEmail(){
        return `${this.email}`
    }

    getRole(){
        return 'employee'
    }
}

module.exports = employee;