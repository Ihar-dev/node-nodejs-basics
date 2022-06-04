import * as path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';

const random = Math.random();

let unknownObject;

import * as firstTempObject from './files/a.json';
import * as secondTempObject from './files/b.json';

if (random > 0.5) {
    unknownObject = firstTempObject;
} else {
    unknownObject = secondTempObject;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export {
    unknownObject,
    createMyServer,
};

