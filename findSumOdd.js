function getSum(numbers){
    let sum = 0;
for(let i = 0; i < numbers.length ; i++){
    const  index = i ;
    const element =  numbers [index]
    sum = sum + element ;
    console.log(index, element, sum)
}
return sum ; 
}
const myNumber=[32,43,44,56,76,43,23,21,43];
getSum(myNumber);