// function with array arguments
function sum1(){
    // arguments
    let sum = 0;
    for(let i=0; i<arguments.length; i++){
        sum=sum+arguments[i];
    }
    return sum;
}

// let arr=[1,2,3,4,5,6,7,8,9,10];
// let result=sum1(arr)
// console.log(result)

console.log(sum1(1,2,3,4,5))