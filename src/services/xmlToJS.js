import fs from 'fs';
import path from 'path';
import xml2js from 'xml2js';
import { promisify } from 'util';

const readFile = promisify(fs.readFile);
const parser = new xml2js.Parser({ explicitArray: false });
const parseString = promisify(parser.parseString);

export default async filePath => {
  try {
    const xml = await readFile(filePath);
    const js = await parseString(xml);
    return js;
  } catch (err) {
    throw new Error(err);
  }
};
