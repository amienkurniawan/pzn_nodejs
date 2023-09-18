import util from 'util';

const firstName = 'amien';
const lastName = 'kurniawan';

console.info(util.format("Hello %s %s"), firstName, lastName); // sebelum kita menggunakan backtic `` kita menggunakan cara ini

console.info(`Hello ${firstName} ${lastName}`); // setelah ditemukan backtic `` kita dengan mudah menggunakan ini

const person = {
  firstName: "amien",
  lastName: "kurniawan"
}

console.info(`person : ${JSON.stringify(person)}`); // untuk menampilkan format json ke string maka kita perlu menggunakan JSON.stringfy
console.info(util.format("Person : %j", person)); // untuk menampilkan format json menggunakan util maka kita perlu menggunakan util.format