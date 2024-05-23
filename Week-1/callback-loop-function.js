//SUM OF 1 to 100

// let ans=0;
// for(let i=1;i<=100;i++){
//     ans+=i;
// }   

// console.log(ans);


//CALLBACK FUNCTIONS
// function square (n){
//     return n*n;
// }

// function sumOfSquares(a,b){
//     const val1 =square(a);
//     const val2 =square(b);
//     return val1+val2;
// }

// console.log(sumOfSquares(2,3));


//FUNCTION OF SQUARE AND CUBE
// function square (n){
//     return n*n;
// }
// function cube(n){
//     return n*n*n;
// }

// function sumOfSquares(a,b){
//     const val1 =square(a);
//     const val2 =square(b);
//     return val1+val2;
// } 

// function sumOfCubes(a,b){
//     const val1 =cube(a);
//     const val2 =cube(b);
//     return val1+val2;
// }

// console.log(sumOfCubes(2,3));

//CALLBACK FUNCTION
function square (n){
    return n*n;
}
function cube(n){
    return n*n*n;
}

function sumOfSomething(a,b,fn){
    console.log(fn);
    const val1= fn(a);
    const val2= fn(b);  
    return val1+val2;
    
}

const ans = sumOfSomething(2,3,cube);
console.log(ans);

