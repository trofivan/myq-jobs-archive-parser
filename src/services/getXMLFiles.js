import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const getStats = promisify(fs.stat);

const isDirectory = async dir => {
  try {
    const stats = await getStats(dir);
    const isDirectory = stats.isDirectory();

    return isDirectory;
  } catch (err) {
    throw new Error(err);
  }
};

(async () => {
  try {
    const dirPath = path.join(
      __dirname,
      '..',
      '..',
      '__data__',
      '2018-04-30-0001',
      'job-0073.xml'
    );
    const stats = await getStats(dirPath);
    const isDir = await isDirectory(dirPath);

    console.log(isDir);
  } catch (err) {
    console.log(err.message);
  }
})();
