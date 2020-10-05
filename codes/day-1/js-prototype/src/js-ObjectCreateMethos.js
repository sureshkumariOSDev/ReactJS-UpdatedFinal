var joydip = Object.create({});
joydip.firstName = 'joydip';
joydip.lastName = 'joydip';
joydip.fullName = function () {
    return this.firstName + ' ' + this.lastName;
}
console.log(joydip.fullName())