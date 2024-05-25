console.log('hi');


setTimeout(function() {
    console.log('there');
},5000)


let a=0;
for (let i=0; i<1000000000; i++){
    a+=i;
}
console.log(a);