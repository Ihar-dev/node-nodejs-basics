import * as path from 'path';
import { fileURLToPath } from 'url';
import { access } from 'fs/promises';
import { rename as fsRename} from 'fs/promises';

export const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const wrongFilePath = path.join(__dirname, 'files', 'wrongFilename.txt');
  const properFilePath = path.join(__dirname, 'files', 'properFilename.md');

  const renameFile = async () => {
    try {
      fsRename(wrongFilePath, properFilePath);
    } catch (err) {
      if (err) throw err;
    }
  }

  const checkProperFilePath = async () => {
    try {
      await access(properFilePath);
      console.log(new Error('\x1b[31m FS operation failed'));
    } catch {
      renameFile();
    }
  }

  try {
    await access(wrongFilePath);
    checkProperFilePath();
    
  } catch {
    console.log(new Error('\x1b[31m FS operation failed'));
  }
};

rename();
