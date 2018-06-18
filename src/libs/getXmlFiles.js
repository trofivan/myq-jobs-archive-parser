import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

import getDirsRecursively from './getDirsRecursively';

const [readDir, getStat] = [promisify(fs.readdir), promisify(fs.stat)];

const toFullPaths = (dirs, dirsContent) =>
  dirsContent.reduce((acc, dirContent, index) => {
    return [...acc, dirContent.map(item => path.join(dirs[index], item))];
  }, []);

const toFlate = arr => arr.reduce((acc, item) => [...acc, ...item], []);

export default async rootDir => {
  const dirs = [rootDir, ...(await getDirsRecursively(rootDir))];
  const dirsContentPromises = dirs.map(dir => readDir(dir));

  const dirsContent = await Promise.all(dirsContentPromises);
  const dirsContentFullpaths = toFullPaths(dirs, dirsContent);

  const fullpaths = toFlate(dirsContentFullpaths);
  const xmlFiles = fullpaths.filter(
    fullpath => path.extname(fullpath).toLowerCase() === '.xml'
  );

  return xmlFiles;
};
