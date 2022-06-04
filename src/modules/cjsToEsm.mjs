import * as path from 'path';
import { fileURLToPath } from 'url';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';

const random = Math.random();

let unknownObject;

import { readFile } from 'fs/promises';

const firstJsonObject = JSON.parse(
  await readFile(
    new URL('./files/a.json', import.meta.url)
  )
);
const secondJsonObject = JSON.parse(
  await readFile(
    new URL('./files/b.json', import.meta.url)
  )
);

if (random > 0.5) {
    unknownObject = firstJsonObject;
} else {
    unknownObject = secondJsonObject;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export {
    unknownObject,
    createMyServer,
};

