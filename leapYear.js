// year will be a leap year if the divisible by 4


function leapYear(year) {
    if (year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if (year % 100 === 0  && year % 400 === 0){
        return true
    }
    else{
        return false
    }
}


const isLeapYear = leapYear(2000);
console.log(isLeapYear);
