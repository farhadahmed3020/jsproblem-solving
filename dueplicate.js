var name = [1,2,3 ,4,5,6,7,8,9,10,2,5,8,11,35,22];
var uniqueName = [];
for (var i=0 ; i<name.length; i++){
    var element = name[i];         
    var index = uniqueName.indexOf(element);
    if (index == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);


var name =['anis','shohel','farhad','emon','siful','emon','siful'];
var uniqueName =[];
for (var i =0 ; i <name.length; i++){
    var element = name[i];
    var index = uniqueName.indexOf(element);
    if(index == -1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);