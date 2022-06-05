import * as path from 'path';
import { fileURLToPath } from 'url';
import { open } from 'fs/promises';

export const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const fileToReadPath = path.join(__dirname, 'files', 'fileToRead.txt');
  const fd = await open(fileToReadPath);
  const myReadStream = fd.createReadStream();
  myReadStream.on('data', chunk => {
    const textData = Buffer.from(chunk).toString();
    process.stdout.write(textData + '\n');
  });
};

read();
