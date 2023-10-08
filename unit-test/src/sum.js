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