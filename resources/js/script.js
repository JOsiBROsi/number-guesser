let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


const generateTarget = () => Math.round(Math.random() * 10);

const compareGuesses = (humanGuess, computerGuess, targetNumber) => getAbsoluteDistance(targetNumber, humanGuess) <= getAbsoluteDistance(targetNumber, computerGuess) ? true : false;

const updateScore = winner => winner === 'human' ? humanScore += 1 : computerScore += 1;

const advanceRound = () => currentRoundNumber += 1;

const getAbsoluteDistance = (num1, num2) => Math.abs(num1 - num2);