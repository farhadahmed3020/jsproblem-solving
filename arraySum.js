
function getArraySum(number) {
    var sum = 0;
    for (var i = 0; i < number.length; i++) {
        var element = number[i];
        sum = sum + element;
    }
    return sum;
}

var number = [45, 47, 78, 90, 98, 22, 67];
var result = getArraySum(number)
console.log("total of the numbers:", result);
