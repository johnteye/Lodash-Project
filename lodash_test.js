// Try your luck, guessing the number in front of the array

const _ = require('lodash');
const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function playGuessingGame() {
    let score = 0;

    function askQuestion() {
        r1.question('Guess a number between 1 and 10: ', (userInput) => {
            const shuffledNumbers = _.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
            if (parseInt(userInput) === shuffledNumbers[0]) {
                score++;
                console.log('Correct! Your score is now:', score);
            } else {
                console.log(`Incorrect. The first number was ${shuffledNumbers[0]}.`);
            }

            if (score < 10) {
                askQuestion(); 
            } else {
                r1.close(); 
                console.log(`Final score: ${score}`);
            }
        });
    }

    askQuestion();
}

playGuessingGame();


// Working and Manipulating numbers

const _ = require("lodash");
const data = [
    { value: 10 },
    { value: 25 },
    { value: 8 },
    { value: 18 },
    { value: 32 }
  ];
  

  
const minValue = _.minBy(data, 'value').value;
const mean = _.meanBy(data, "value");
const maxValue = _.maxBy(data, 'value').value;
const total = _.sumBy(data, 'value');
console.log(`The minimum value of the data is: ${minValue}`)
console.log(`The mean value of the data is: ${mean}`)
console.log(`The max value of the data is: ${maxValue}`)
console.log(`The sum of the data is: ${total}`)
  
  
