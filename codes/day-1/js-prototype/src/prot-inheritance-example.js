function employee(name, basic, da, hra) {
    this.name = name;
    this.basicPay = basic;
    this.daPay = da;
    this.hraPay = hra;
}

employee.prototype.calculateSalary = function () {
    return this.basicPay + this.daPay + this.hraPay;
}

function developer(name, basic, da, hra, incentive) {
    employee.call(this, name, basic, da, hra);
    this.incentivePay = incentive;
    this.calculateSalary = function () {
        return this.__proto__.calculateSalary.apply(this) + this.incentivePay;
    }
}
//{__proto__: Object.prototype, ctor: developer}
Object.setPrototypeOf(developer.prototype, employee.prototype);
var anilDeveloper = new developer('anil', 1000, 2000, 3000, 4000);

function hr(name, basic, da, hra, gratuity) {
    employee.call(this, name, basic, da, hra);
    this.gratuityPay = gratuity;
    this.calculateSalary = function () {
        return this.__proto__.calculateSalary.apply(this) + this.gratuityPay;
    }
}
//{__proto__: Object.prototype, ctor: hr}
Object.setPrototypeOf(hr.prototype, employee.prototype);
var sunilHr = new hr('sunil', 2000, 3000, 4000, 5000);

console.log(anilDeveloper.calculateSalary())
console.log(sunilHr.calculateSalary())