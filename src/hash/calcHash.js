import * as path from 'path';
import { fileURLToPath } from 'url';

import { createReadStream } from 'fs';
import { stdout } from 'process';
const { createHash } = await import('crypto');

export const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  const hash = createHash('sha256');
  const input = createReadStream(filePath);
  
  input.pipe(hash).setEncoding('hex').pipe(stdout);
};

calculateHash();
