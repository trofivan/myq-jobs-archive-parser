import getDirs from '../libs/getDirs';

const iter = async (acc = [], current) => {
  const dirs = await getDirs(current);

  return dirs.length === 0
    ? acc
    : dirs.reduce(
        async (prevPromise, dir) => iter([...(await prevPromise), dir], dir),
        acc
      );
};

const getDirsRecursively = dir =>
  new Promise((resolve, reject) => {
    try {
      resolve(iter([], dir));
    } catch (err) {
      reject(err);
    }
  });

export default getDirsRecursively;
