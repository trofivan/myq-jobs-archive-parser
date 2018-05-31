import fs from 'fs';
import path from 'path';

export default dir =>
  fs
    .readdirSync(dir)
    .map(item => path.join(dir, item))
    .filter(item => fs.statSync(item).isDirectory());
