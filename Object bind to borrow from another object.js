const generalPerson = {
    firstName: 'Abdullah',
    lastName: 'Hasan',
    salary: 20000,
    getFullName: function () {
        //console.log(this.firstName, this.lastName);
    },
    chargeBill(amount) {
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}
// generalPerson.chargeBill(5000);
// console.log("Without commission: ",generalPerson.salary);

const bigPerson = {
    firstName: 'Big',
    lastName: 'Man',
    salary: 30000,
}
const friendPerson = {
    firstName: 'Big',
    lastName: 'Man',
    salary: 25000,
}
// generalPerson.chargeBill();
const bigChargeBill = generalPerson.chargeBill.bind(bigPerson);
bigChargeBill(2000);
bigChargeBill(5000);

console.log("Big people, after calculation: ",bigPerson.salary);
console.log("General people: ",generalPerson.salary);

const friendChargeBill = generalPerson.chargeBill.bind(friendPerson);
friendChargeBill(10000);
friendChargeBill(5000);