// ..........12 inch 1 feet............

function inchToFeet(inch) {
    const feet = inch / 12;
    return feet;
}

const dipHeight = inchToFeet(58);
// console.log(dipHeight)

function inchToFeet2(inch) {
    const feet = inch / 12;
    const integerFeetNumer = parseInt(feet);
    const remainingInch = inch % 12;

    const result = integerFeetNumer + ' fit ' + remainingInch + ' inch ';

    return result;
}

const finalResult = inchToFeet2(83)

// console.log(finalResult);


// .........mile To Kilometer..........


function mileToKilometer(mile) {
    const kilo = mile * 1.60934;
    
    return kilo
}

const result = mileToKilometer(10);
console.log(parseInt(result));



