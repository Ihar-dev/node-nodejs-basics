import * as path from 'path';
import { fileURLToPath } from 'url';
import { access } from 'fs/promises';
import { unlink } from 'fs/promises';

export const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const fileToDeletePath = path.join(__dirname, 'files', 'fileToRemove.txt');
  try {
    await access(fileToDeletePath);
    unlink(fileToDeletePath);    
  } catch {
    console.log(new Error('\x1b[31m FS operation failed'));
  }
};
