
// let x = 0;
// let y = 1;
// let z = x+y
// console.log(x);
// console.log(z);
// while(z<10){
//     console.log(z)
//     x=y;
//     y=z;
//     z=x+y;
    
// } 

function fibonacciGenerator (n) {
    
    //Write your code here:
    let output = [];
    if (n===1){
        output=[0];
    }
    else if (n===2){
        output=[0,1];
    }
    else{
        output=[0,1]
        for (i=2; i<n; i++){
            output.push(output[output.length-2] + output[output.length-1])
            
        }
    }
    return output;
    
}
let a = fibonacciGenerator(5)
console.log(a)

