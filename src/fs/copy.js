import * as path from 'path';
import { fileURLToPath } from 'url';
import { access } from 'fs/promises';
import { appendFile } from 'fs/promises';

export const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const prevDir = path.join(__dirname, 'files');
  const nextDir = path.join(__dirname, 'files_copy');
  try {
    await access(prevDir);
    console.log('found');
  } catch {
    console.log(new Error('\x1b[31m FS operation failed'));
  } 
};
copy();