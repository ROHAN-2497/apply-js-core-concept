function isLeapYear(year){
    const remainder = year % 2
    if (remainder === 0){
      return true ;
    }
    else{
        return false ;
    }
}

 const thisYear =isLeapYear(1993);
 console.log(thisYear)
 const thatYear =isLeapYear(2024);
 console.log(thatYear)