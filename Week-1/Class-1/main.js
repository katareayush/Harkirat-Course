// console.log("Hello World");
// console.log(a);

// change directory to where your code is, and write node main.js (or whatever your file name is)


// TYPES OF VARIABLES
// let  a=1;
// a=3;
// console.log(a);

// var b=1;
// b=2;
// console.log(b);

// const c=1;
// console.log(c);


// let firstName="ayush"; 
// let age=18;
// let isAdult=false;

// console.log("This persons name is "+firstName+" and his age is "+age+" and he is an adult "+isAdult);

// if(isAdult == true){
//     console.log(firstName+" is an adult");
// }

// if(isAdult==false){
//     console.log(firstName+" is not an adult");
// }


//PQ-1
// let firstName="Ayush";  
// let lastName="Katare";
// console.log("Hello" +" "+firstName+" "+lastName);

//PQ-2
// let a=0;
// for (let i=0;i<1000;i++){
//     a++;
//     console.log(a);
// }


//ARRAYS

// const personArray=["Ayush","harkirat","raman"];
// console.log(personArray);
// console.log(personArray[0]);
// console.log(personArray[1]);


// PQ-1 (ARRAYS)
// const ages=[18,19,20,21,22,23,24,25,26,27,28,29,30];

// for(let i=0;i<ages.length;i++){
//     if(ages[i]%2==0){
//         console.log(ages[i]);
//     }
// }

// PQ-2 (Objects)
// const allUsers=[{
//     firstName:"Ayush",
//     gender:"male"
// },{
//     firstName:"Harkirat",
//     gender:"male"
// },{
//     firstName:"Priya",
//     gender:"female"
// }]

// for(let i=0;i<allUsers.length;i++){
//     if(allUsers[i]["gender"]=="male"){
//         console.log(allUsers[i]["firstName"]);
//     }
// }

// FUNCTIONS

// function sum(a,b){
//     return a+b;
// }

// const value=sum(1,2);
// console.log(value);

//FUNCTIONS

function sum(a,b){
    let result = a+b;
    return result;
}

function displayResult(data){
    console.log("Result of the sum is: "+data);
}

function displayResultPassive(data){
    console.log("Sum's result is: "+data);
}   