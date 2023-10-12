export const sum = (number1, number2) => {
  return number1 + number2;
}

export const sumAll = (myNumbers) => {
  let sums = 0;

  myNumbers.forEach(element => {
    sums += element;
  });

  return sums;
}

export const calculate = (numbers, callback) => {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  callback(total);
}

export const calculateAndReturn = (numbers, callback) => {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return callback(total);
};