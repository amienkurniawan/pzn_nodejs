import fs from 'fs';

export const writeTofile = (file, content) => {
  fs.writeFileSync(file, content);
}