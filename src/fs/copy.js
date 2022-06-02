import * as path from 'path';
import { fileURLToPath } from 'url';
import { access } from 'fs/promises';
import { mkdir } from 'fs/promises';
import { copyFile } from 'fs/promises';
import fs from 'fs';
const fsPromises = fs.promises;

export const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const prevDir = path.join(__dirname, 'files');
  const newDir = path.join(__dirname, 'files_copy');
  const errMsg = () => console.log(new Error('\x1b[31m FS operation failed'));

  const copyDirectory = () => {
    try {
      const files = await fsPromises.readdir(prevDir);
      for (let file of files) {
        let prevFilePath = path.join(prevDir, file);
        let nextFilePath = path.join(nextDir, file);
        copyFile(prevFilePath, nextFilePath);
      }
    } catch (err) {
      if (err) throw err;
    }
  };

  const makeDirectory = async () => {
    try {
      await mkdir(newDir, {
        recursive: true
      });
      copyDirectory();
    } catch (err) {
      if (err) throw err;
    }
  };

  try {
    await access(prevDir);
    try {
      await access(newDir);
      errMsg();
    } catch {
      makeDirectory();
    }
  } catch {
    errMsg();
  } 
};
copy();