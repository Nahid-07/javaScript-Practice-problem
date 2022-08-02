// for (var i = 0; i<=10; i++){
//     console.log(i);
//     if(i >= 4){
//         break;
//     }
// }

// var i=0;
// while(i<=10){
//     console.log(i);
//     i+=1;
//     if(i > 5){
//         break
//     }
// }

// var myArray =[1,2,45,44,55,67,27,38];
// for(var i = 0; i < myArray.length; i++){
//     var number = myArray[i];
//     if(number > 50){
//         break;
//     }
//     console.log(number);
// }
var myArray =[1,2,45,44,55,67,27,38];
for(var i = 0; i < myArray.length; i++){
    var number = myArray[i];
    if(number > 50){
        continue;
    }
    console.log(number);
}