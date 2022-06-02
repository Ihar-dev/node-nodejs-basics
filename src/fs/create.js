import * as path from 'path';
import { fileURLToPath } from 'url';
import { access } from 'fs/promises';
import { appendFile } from 'fs/promises';

export const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, 'files', 'fresh.txt');
  try {
    await access(filePath);
    console.log(new Error('\x1b[31m FS operation failed'));
  } catch {
    appendFile(filePath, 'I am fresh and young');
  }
};
