import * as readline from "readline";
import { Transform } from 'stream';

export const transform = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
  });

  const startMsg = 'Enter your text or press "ctrl + c" to quit:\n';
  process.stdout.write(startMsg);
  
  const reverseStream = new Transform({
    transform (data) {
      const reversedData = data.split('').reverse().join('');
      return reversedData;
    }
  });

  rl.on('line', async line => {
    const msg = await reverseStream._transform(line);
    process.stdout.write(msg);
    process.stdout.write(`\n${startMsg}`);
  });
};

transform();
