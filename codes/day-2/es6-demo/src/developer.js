var { employee } = require('./employee');
//import { employee } from './employee'
// export class developer extends employee {
class developer extends employee {
    constructor(name, basic, da, hra, incentive) {
        //employee.call(this, name, basic, da, hra);
        super(name, basic, da, hra);
        this.incentivePay = incentive;
    }
    get Name() {
        return this.name;
    }
    set Name(name) {
        this.name = name;
    }
    calculateSalary() {
        return super.calculateSalary() + this.incentivePay;
    }
}

module.exports = {
    developer //developer:developer
}