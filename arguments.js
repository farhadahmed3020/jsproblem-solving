function addNumbers(num1, num2){
    //console.log(arguments[3]);
    var sum = 0 ;
    for(let i = 0; i < arguments.length; i++){
        const num = arguments[i]
        sum = sum + num ;
    }
    
    function logInfo(message){
        console.log(message);
    }
    logInfo('Good morning');
    return sum ;
}
var result = addNumbers(2,3,8);
console.log(result);r