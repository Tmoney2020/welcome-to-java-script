const numberOfCupsOfCoffee = 2
const fullName = 'Trent Costa'

console.log(
  `My name is ${fullName} and I drink ${numberOfCupsOfCoffee} cups of coffee per day`
)

const userName = window.prompt('What is your name?')
console.log(`Nice to meet you ${userName}`)

function theParse(whatToParse) {
  return parseFloat(whatToParse)
}

const userNumberOne = window.prompt('Choose a number')
const userNumberTwo = window.prompt('Choose your second number')

const firstOperand = theParse(userNumberOne)
const secondOperand = theParse(userNumberTwo)

// adding the 2 variables together
const sum = firstOperand + secondOperand

// subtract the 2 variables
const difference = secondOperand - firstOperand

// Multiply the variable
const product = firstOperand * secondOperand

// divide the 1st variable by the 2nd variable
const quotient = firstOperand / secondOperand

// get the remainder
const remainder = firstOperand % secondOperand

console.log(`If you add ${userNumberOne} to my ${userNumberTwo} you get ${sum}`)
console.log(
  `If you subtract ${userNumberOne} from ${userNumberTwo} you get ${difference}`
)
console.log(
  `If you multiply ${userNumberOne} by ${userNumberTwo} you get ${product}`
)
console.log(
  `If you divide ${userNumberOne} by ${userNumberTwo} you get ${quotient}`
)
console.log(
  `The remainder of ${userNumberOne} and ${userNumberTwo} is ${remainder}`
)

const numberArray = [
  77,
  24,
  37,
  65,
  77,
  13,
  48,
  53,
  83,
  96,
  26,
  29,
  50,
  89,
  55,
  55,
  84,
  70,
  67,
  62,
  83,
  71,
  46,
  63,
  46,
  13,
  35,
  25,
  95,
  53,
  21,
  68,
  26,
  41,
  21,
  30,
  81,
  98,
  78,
  57,
  87,
  26,
  36,
  76,
  54,
  35,
  93,
  98,
  80,
  72,
  48,
  93,
  33,
  26,
  63,
  46,
  24,
  44,
  87,
  97,
  63,
  24,
  68,
  99,
  79,
  91,
  56,
  97,
  5,
  64,
  60,
  63,
  41,
  4,
  94,
  27,
  21,
  41,
  42,
  98,
  47,
  90,
  68,
  33,
  42,
  40,
  1,
  4,
  62,
  85,
  22,
  66,
  4,
  45,
  29,
  17,
  22,
  63,
  36,
  66,
]

// Smallest number in array
let smallest = 0
for (let index = 0; index < numberArray.length; index++) {
  if (smallest === 0) {
    smallest = numberArray[index]
  }
  if (numberArray[index] < smallest) {
    smallest = numberArray[index]
  }
}
console.log(`The smallest number is ${smallest}`)

// Largest number in array
let largest = 0
for (let index = 0; index < numberArray.length; index++) {
  if (largest === 0) {
    largest = numberArray[index]
  }
  if (numberArray[index] > largest) {
    largest = numberArray[index]
  }
}
console.log(`The largest number in the array is ${largest}`)

// sum of the entire array
let sumOfArray = 0
for (let index = 0; index < numberArray.length; index++) {
  sumOfArray = sumOfArray + numberArray[index]
}
console.log(`The sum of the array is ${sumOfArray}`)

// average of the array
let average = 0
for (let index = 0; index < numberArray.length; index++) {
  average = sumOfArray / numberArray.length
}
console.log(`The average of the array is ${average}`)

// sum of all the odd numbers
let sumOfOdd = 0
for (let index = 0; index < numberArray.length; index++) {
  if (numberArray[index] % 2 === 1) {
    sumOfOdd = sumOfOdd + numberArray[index]
  }
}
console.log(`The sum of all the odd numbers is ${sumOfOdd}`)

// sum of all the even numbers
let sumOfEven = 0
for (let index = 0; index < numberArray.length; index++) {
  if (numberArray[index] % 2 === 0) {
    sumOfEven = sumOfEven + numberArray[index]
  }
}
console.log(`The sum of all the even numbers is ${sumOfEven}`)
