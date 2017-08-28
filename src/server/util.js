import { join } from 'path';
import fs from 'fs';
import crypto from 'crypto';
import { build as buildConfig } from '../../params';

const md5 = string => crypto.createHash('md5').update(string).digest('hex');
export const getFile = path => fs.readFileSync(path);
export const getHashedUrl = (url, path) => `${url}?${md5(getFile(path))}`;


