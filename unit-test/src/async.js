export const sayHelloAsync = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name) {
        resolve(`Hello ${name}`);
      } else {
        reject("Name is empty");
      }
    }, 2000);
  });
};


export const getBalance = async (name, from, cashFrom) => {
  const balance = await from();
  const cash = await cashFrom();
  return {
    name: name,
    balance: balance,
    cash: cash
  }
}