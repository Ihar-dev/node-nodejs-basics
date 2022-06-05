import * as path from 'path';
import { fileURLToPath } from 'url';
import * as zlib from 'zlib';
import fs from 'fs';
import { open } from 'fs/promises';

export const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const fileToReadPath = path.join(__dirname, 'files', 'archive.gz');
  const fileToWritePath = path.join(__dirname, 'files', 'fileToCompress.txt');
  const myWritableStream = fs.createWriteStream(fileToWritePath);
  const fd = await open(fileToReadPath);
  const myReadStream = fd.createReadStream();
  
  myReadStream.on('data', chunk => {
    zlib.unzip(chunk, function(err, result) {
      if (err) return console.log('error ' + err);
      myWritableStream.write(result);
    });
  });
};

decompress();
