import fs from 'fs';
import path from 'path';
import getDirsSync from '../libs/getDirsSync';

const getDirsRecursivelySync = dir =>
  getDirsSync(dir).reduce(
    (acc, current) => [...acc, current, ...getDirsRecursivelySync(current)],
    []
  );

// const getDirsRecursivelySync = dir => {
//   const iter = (acc = [], current) => {
//     const dirs = getDirsSync(dir);

//     if (dirs.length) {
      
//     }

//     return acc;
//   };

//   return iter([], dir);
// };

export default getDirsRecursivelySync;
