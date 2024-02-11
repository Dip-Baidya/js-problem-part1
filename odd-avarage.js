// find the odd number into the array and avarge them


function oddAvarage(numbers) {

    const oddNumbers = [];

    for (const number of numbers) {
        if (number % 2 === 1) {
            oddNumbers.push(number);
        }
    }
    console.log("all the odd numbers in new array: ", oddNumbers);


    let sum = 0;
    for (const number of oddNumbers) {
        sum = sum + number;
    }
    const count = oddNumbers.length;
    console.log(sum, count);
    const avg = sum / count;
    return avg;
}


const numbers = [42, 13, 70, 5, 8, 9, 10, 7, 5];

const avg = oddAvarage(numbers);

console.log("Avarage all the ODD numbers: ", avg)