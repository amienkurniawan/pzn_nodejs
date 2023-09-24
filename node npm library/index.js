export const sayHello = (name) => {
  return `Hello ${name}`;
}

export const sum = (numbers) => {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}

export const findBigest = (numbers) => {
  let max = 0;

  for (const number of numbers) {
    if (number > max) {
      max = number;
    }
  }
  return max;
}