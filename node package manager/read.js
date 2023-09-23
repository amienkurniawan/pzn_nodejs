import fs from 'fs';

export const readFile = (file) => {

  const content = fs.readFileSync(file);

  console.info(content.toString());
}