
var myDay = ['unlock the module at 8pm', 'watch videos', 'take notes', 'after finishing watch video do practice','in case you do not understand concept'];
let i = 0;
var index =0;
while(index < 10){
    i=0;
    while(i<myDay.length){
        var step = myDay[i];
        console.log(step);
        i++;
        if(myDay === 'in case you do not understand concept'){
            console.log('go for support');
        }
    }
    index++;
}