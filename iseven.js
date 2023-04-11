/* function iseven(numbers){
    const remainder = numbers % 2
    console.log(remainder)
    if (remainder == 0){
        console.log("number ti even hobe")
    }
    else{
        console.log("number ta odd hoobe")
    }


}
iseven(142);
iseven(301); */

// function isEven(number){
//     const remainder = number % 2
//     console.log(remainder);
//     if (remainder === 0){
//         console.log("number ta even hobe")
//     }
//     else{
//         console.log('number ta odd hobe');
//     }
// }
// isEven(303);
// isEven(304);



function isTrueOrFalse(number){
    const remainder = number % 2
    if(remainder === 0){
    return true;
}
else{
    return false ;
}
}

const mynumber =isTrueOrFalse(201)
console.log(mynumber)

const hernumber = isTrueOrFalse(204)
console.log(hernumber);