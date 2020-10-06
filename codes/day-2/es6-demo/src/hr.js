var { employee } = require('./employee');
//import { employee } from './employee'
class hr extends employee {
    constructor(name, basic, da, hra, gratuity) {
        //employee.call(this, name, basic, da, hra);
        super(name, basic, da, hra);
        this.gratuityPay = gratuity;

    }
    calculateSalary() {
        return super.calculateSalary() + this.gratuityPay;
    }
}
//export default hr;
module.exports = hr;

// module.exports = {
//     hr //hr:hr
// }