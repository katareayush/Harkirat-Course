// const fs = require ("fs");
// // filesystem module

// fs.readFile("a.txt","utf-8", function(err, data){
//     console.log(data);
// })

// console.log("This is the last line of the code");


//ARROW FUNCTION
// const sum = (a,b) =>{
//     return a+b;
// }

// const ans = sum(2,3);
// console.log(ans);

//MAP FUNCTION
// const input= [1,2,3,4,5];

// function double(n){
//     return n*2;
// }

// const ans=input.map(double);
// console.log(ans);

//FILTER FUNCTION

const arr=[1,2,3,4,5];

function filterlogic(n)
{
    if(n%2==0){
        return true;
    }
    else{
        return false;
    }   
}

const ans=arr.filter(filterlogic);
console.log(ans);