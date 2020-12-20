function isLeapYear(years) {
    const remainder1 = years % 4;
    const remainder3 = years % 400;
    const remainder2 =  years % 100;
    if (remainder1 == 0 && remainder2 !=0) {
        return true;
    }
    else if(remainder3 == 0){
        return true;
   }
   else {
      return false;
    }
}
const checkLeapYear = isLeapYear(2000);
console.log(checkLeapYear);


function leapYear(year){
    return((year % 4 == 0) && (year % 100 !=0)) ||(year % 400 == 0);
}
const LeapYear = leapYear(2000);
console.log(LeapYear);