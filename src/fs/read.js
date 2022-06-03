import * as path from 'path';
import { fileURLToPath } from 'url';
import { access } from 'fs/promises';
import { open } from 'fs/promises';

const readFile = async (fileToReadPath) => {
  const fd = await open(fileToReadPath);
  const myReadStream = fd.createReadStream();
  myReadStream.on('data', chunk => {
    const textData = '' + Buffer.from(chunk);
    process.stdout.write(textData + '\n');
    /* const textData = Buffer.from(chunk).toString();
    console.log(textData); */                                // another option
  });
}

export const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const fileToReadPath = path.join(__dirname, 'files', 'fileToRead.txt');

  try {
    await access(fileToReadPath);
    readFile(fileToReadPath);  
  } catch {
    console.log(new Error('\x1b[31m FS operation failed'));
  }
};
