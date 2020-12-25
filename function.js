// nums = [5 , 12, 89 , 45 , 18 , 8];
// for (let i = 0; i < nums.length; i++) {
//     const num = nums[i];
//     if(num % 2 == 0){
//         console.log(num ,': is even number');
//     }else{
//         console.log(num*2, ': odd number change to even number');
//     }
// }


// function evenify(nums){
//     for (let i = 0 ; i < nums.length; i++){
//         const num = nums[i];
//         if(num % 2 == 0 ){
//             console.log(num , ': is even number');
//         }
//         else{
//             console.log(num*2 ,': odd number change to even number ');
//         }
//     }
// }
// nums = [ 5,7,9,45,12,24];
// evenify(nums);


// function return //

function evenify(num){
    var result;
    if(num % 2 == 0){
        result = num;
    }
    else{
        result = num*2
    }
    return result;
}
var result = evenify(13);
const square = result* result
console.log('result',square);



function evenify_all(nums){
    var even_array = []
    for (let i = 0 ; i < nums.length; i++){
        const num = nums[i];
        var result = evenify(num)
        even_array.push(result);
    }
    return even_array;
}
var nums = [ 5,7,9,45,12,24];
var nums_even = evenify_all(nums);
console.log(nums_even);