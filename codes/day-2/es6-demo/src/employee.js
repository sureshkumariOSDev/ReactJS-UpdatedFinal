// export class employee {
class employee {
    constructor(name, basic, da, hra) {
        this.name = name;
        this.basicPay = basic;
        this.daPay = da;
        this.hraPay = hra;
    }
    calculateSalary() {
        return this.basicPay + this.daPay + this.hraPay;
    }
}
function add(x, y) {
    return (x + y);
}
module.exports = {
    employee, 
    add
}