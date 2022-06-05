import * as childProcess from 'child_process';
import { fileURLToPath } from 'url';
import * as path from 'path';

export const spawnChildProcess = async (args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, 'files', 'script.js');
  const child = childProcess.fork(filePath, args);
  console.log('Enter your text or press "ctrl + c" to quit\n');
};

spawnChildProcess(process.argv);
