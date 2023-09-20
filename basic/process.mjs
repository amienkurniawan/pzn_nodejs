import process from 'process';

process.addListener('exit', (exitcode) => {
  console.info(`NodeJS exit with code ${exitcode}`);
});

console.info(process.version);

console.table(process.argv);
// console.table(process.report);
// console.table(process.env);

console.info("Hello");
process.exit(1);