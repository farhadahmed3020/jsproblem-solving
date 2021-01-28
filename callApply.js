const normalPerson = {
    firstName:'Eva',
    lastName :'Moni',
    salary : 30000,
    getFullName : function(){
        console.log(this.firstName , this.lastName);
    },
    chargeBill:function(amount){
        console.log(this);
       this.salary = this.salary -amount ;
       return this.salary;
    },
    // cafeBill:function(bill){
    //     this.backAmount = this.salary -bill ;
    //     return this.backAmount;
    // }
}
//console.log(normalPerson.firstName ,normalPerson.lastName);

// normalPerson.chargeBill(300);
// normalPerson.chargeBill(1000);
// console.log(normalPerson.salary);


// normalPerson.cafeBill(300);
// normalPerson.cafeBill(1000);
// console.log(normalPerson.backAmount);


const heroPerson = {
    firstName : 'Evan',
    lastName : 'Khan',
    salary : 50000,
} 
 

const toperPerson = {
     firstName :'Amir', 
     lastName : 'Khan',
     salary: 40000,
}
//normalPerson.chargeBill();
const heroChargeBill  = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2200);
heroChargeBill(3000);
console.log(heroPerson.salary);

console.log(normalPerson.salary);

const toperChargeBill =  normalPerson. chargeBill.bind(toperPerson);
toperChargeBill(5000);
console.log(toperPerson.salary);

