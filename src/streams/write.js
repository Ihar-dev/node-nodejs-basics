import * as path from 'path';
import { fileURLToPath } from 'url';
import * as readline from "readline";
import fs from 'fs';

export const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const fileToWritePath = path.join(__dirname, 'files', 'fileToWrite.txt');
  const writableStream = fs.createWriteStream(fileToWritePath);

  writableStream.on('error',  (error) => {
      console.log(`An error occurred while writing to the file. Error: ${error.message}`);
  });

  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: 'Enter your text or press "ctrl + c" to quit:\n'
  });

  rl.prompt();
    
  rl.on('line', line => {
    const sentence = line + '\n'
    writableStream.write(sentence);
    rl.prompt();
  });

  rl.on('close', () => {
      writableStream.end();
      writableStream.on('finish', () => {
          console.log(`All your sentences have been written to ${fileToWritePath}`);
          process.exit();
      });
  });
};

write();
