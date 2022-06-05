import * as path from 'path';
import { fileURLToPath } from 'url';
import * as zlib from 'zlib';
import fs from 'fs';

export const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const fileToReadPath = path.join(__dirname, 'files', 'fileToCompress.txt');
  const fileToWritePath = path.join(__dirname, 'files', 'archive.gz');

  const gzip = zlib.createGzip();

  const myReadStream = fs.createReadStream(fileToReadPath);
  const myWritableStream= fs.createWriteStream(fileToWritePath);
  myReadStream.pipe(gzip).pipe(myWritableStream); 
};

compress();
