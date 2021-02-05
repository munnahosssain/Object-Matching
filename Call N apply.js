const anyPerson = {
    firstName: 'Abdullah',
    lastName: 'Hasan',
    salary: 20000,
    getFullName: function () {
        //console.log(this.firstName, this.lastName);
    },
    chargeBill(amount) {
        this.salary = this.salary - amount;
        return this.salary;
    }
}
anyPerson.chargeBill(5000);
console.log("Without commission: ",anyPerson.salary);