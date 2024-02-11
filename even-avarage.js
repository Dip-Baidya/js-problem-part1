// Even number avarage


function evenAvarage(numbers) {

    const evenArrayNumbers = [];
    for (const number of numbers){
        if (number % 2 === 0 ){
            evenArrayNumbers.push(number);
        }
    }
    // console.log(evenArrayNumbers);

    let sum = 0;

    for (const number of evenArrayNumbers){
        sum = sum + number;
    }

    // console.log(sum)
    const length = evenArrayNumbers.length;

    const avg = sum / length;

    console.log(sum, length)

    return avg;
    
}




const numbers = [12,13,14,15,16,17,18,30];

const avg = evenAvarage(numbers)

console.log("Avarage all the Even Numbers: ", avg);