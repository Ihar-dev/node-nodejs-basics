import * as childProcess from 'child_process';
import { fileURLToPath } from 'url';
import * as path from 'path';

export const spawnChildProcess = async (args) => {
  args.splice(0, 2);
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, 'files', 'script.js');
  const child = childProcess.fork(filePath, args, { silent: true });
  process.stdout.write('Enter your text or press "ctrl + c" to quit\n');
  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
  child.stdout.on('data', data => {
    const msg = `Received from child stdout: ${data}`;
    process.stdout.write(msg);
  });
};

spawnChildProcess(process.argv);
