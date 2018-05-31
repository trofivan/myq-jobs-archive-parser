import fs from 'fs';
import path from 'path';
import { promisify } from 'util';

const [readDir, getStat] = [promisify(fs.readdir), promisify(fs.stat)];

export default dir => {
  const getItemsPaths = items => items.map(item => path.join(dir, item));

  const getStatPromisesFromPaths = paths =>
    paths.map(item => ({ path: item, promise: getStat(item) }));

  const getDirsPaths = list => {
    const paths = list.map(item => item.path);
    const promises = list.map(item => item.promise);

    return Promise.all(promises).then(stats =>
      paths.filter((item, index) => stats[index].isDirectory())
    );
  };

  return new Promise((resolve, reject) => {
    const result = readDir(dir)
      .then(getItemsPaths)
      .then(getStatPromisesFromPaths)
      .then(getDirsPaths)
      .catch(e => reject(e));

    resolve(result);
  });
};
