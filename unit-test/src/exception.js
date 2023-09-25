export class MyException extends Error {

}

export const callMe = (name) => {
  if (name === "amien") {
    throw new MyException("Exception happens");
  } else {
    return "OK";
  }
}