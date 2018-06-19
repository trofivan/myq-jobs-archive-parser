import fs from 'fs';
import xml2js from 'xml2js';
import { promisify } from 'util';

const readFile = promisify(fs.readFile);
const parser = new xml2js.Parser({ explicitArray: false });
const parseString = promisify(parser.parseString);

export default filePath =>
  new Promise((resolve, reject) => {
    readFile(filePath)
      .then(xml => parseString(xml))
      .then(js => resolve(js))
      .catch(err => reject(err));
  });
