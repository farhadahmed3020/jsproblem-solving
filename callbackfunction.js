function explain_callback(name, age ,task){
   console.log('Hello',name);
   console.log('your age', age);
   task()
}

function washHand(){
    console.log('wash hand with soap');
}
function facebookUsing(){
    console.log("Scroll facebook but don't like post or comment ");
}
explain_callback('ahmed',22,washHand);
explain_callback('eva',21,facebookUsing);