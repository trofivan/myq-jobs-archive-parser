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

// export default dir =>
//   readDir(dir).then(items => {
//     const paths = items.map(item => path.join(dir, item));

//   });

// readDir(dir)
//   .then(items => items.map(item => path.join(dir, item)))
//   .then(paths => {
//     return new Promise((resolve, reject) => {
//       const promises = paths.map(item => getStat(item));
//       const result = Promise.all(promises).then(stats =>
//         paths.filter((path, index) => stats[index].isDirectory())
//       );
//       resolve(result);
//     });
//   });

// export default async dir => {
//   const items = await readDir(dir);
//   const itemsPath = items.map(item => path.join(dir, item));

//   const dirsPath = itemsPath.filter(itemPath =>
//     fs.statSync(itemPath).isDirectory()
//   );

//   return dirsPath;
// };

// const isDirectory = async itemPath => {
//   return (await getStat(itemPath)).isDirectory();
// };

// export default async dir => {
// const getItemsPaths = items => new Promise((resolve, reject) => {
//   reject();
// });
// const getDirsFromPaths = items => new Promise((resolve, reject) => {});

// const result = await readDir(dir)
//   .then(items => {
//     return items.map(item => path.join(dir, item));
//   })
//   .then(itemsPaths => {
//     const dirs = itemsPaths.filter(item => await isDirectory(item));
//   });

// return result;

// const items = await readDir(dir);
// const itemsPath = items.map(item => path.join(dir, item));

// const promises = itemsPath.map(async itemPath => await isDirectory(itemPath));
// const isDirs = await Promise.all(promises);

// const dirsPath = itemsPath.filter((itemPath, index) => isDirs[index]);

// return dirsPath;
// };
