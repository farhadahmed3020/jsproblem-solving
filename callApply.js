const normalPerson = {
    firstName:'Eva',
    lastName :'Moni',
    salary : 30000,
    getFullName : function(){
        console.log(this.firstName , this.lastName);
    },
    chargeBill:function(amount){
       this.salary = this.salary -amount ;
       return this.salary;
    },
    cafeBill:function(bill){
        this.backAmount = this.salary -bill ;
        return this.backAmount;
    }
}
//console.log(normalPerson.firstName ,normalPerson.lastName);

normalPerson.chargeBill(300);
normalPerson.chargeBill(1000);
console.log(normalPerson.salary);


normalPerson.cafeBill(300);
normalPerson.cafeBill(1000);
console.log(normalPerson.backAmount);