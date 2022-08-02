
/* প্রতিদিন তোমার কাজ কি? 

১) রাত ৮ টা বাজে মডিউল আনলক করো  

২) ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো

৩) ভিডিও দেখতে দেখতে নোটস নাও 

৪) মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো 

৫) কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো 

এখন তোমার কাজ হচ্ছে একটা for লুপ ১০ বার চালিয়ে উপরের জিনিসগুলা আউটপুট হিসেবে দেখানো।  */


var myDay = ['unlock the module at 8pm', 'watch videos', 'take notes', 'after finishing watch video do practice','in case you do not understand concept'];

for(var index = 0; index < 10;index++){
    console.log(index+1);
    for(var i = 0; i < myDay.length; i++){
        var myDayOnGoing = myDay[i];
        console.log(myDayOnGoing)
        if(myDayOnGoing === 'in case you do not understand concept'){
            console.log('go for support');
        }
    }
    
}
