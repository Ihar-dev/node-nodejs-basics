import * as path from 'path';
import { fileURLToPath } from 'url';
import { access } from 'fs/promises';
import { readdir } from 'fs/promises';

export const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const dirPath = path.join(__dirname, 'files');

  const listDirectory = async () => {
    try {
      const files = await readdir(dirPath);
      files.forEach(file => {
        const filePath = path.join(dirPath, file);
        console.log(`${path.parse(filePath).name}`);
      });
    } catch (err) {
      if (err) throw err;
    }
  };

  try {
    await access(dirPath);
    listDirectory();  
  } catch {
    console.log(new Error('\x1b[31m FS operation failed'));
  } 
};
