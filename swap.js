// method 1 //
var a = 5;
var b = 7;
console.log("before swap: a =", a, "b=",b);
var temp = a;
a = b;
b = temp;
console.log("after swap: a =", a, "b=",b);

// method 2 // 
var x =  5;
var y =  7;
x = x + y;
y = x - y;
x = x - y;
console.log("after swap: x =", x , "y=", y);

// method 3 javascript  special // 
var p =  5;
var q =  7;
 [p ,q ] = [q ,p]
console.log("after swap: p =", p , "q=", q);

