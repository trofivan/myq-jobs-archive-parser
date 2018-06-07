import getDirsSync from '../libs/getDirsSync';

const getDirsRecursivelySync = dir => {
  // Tail call optimization
  const iter = (acc = [], current) => {
    const dirs = getDirsSync(current);

    return dirs.length === 0
      ? acc
      : dirs.reduce(
          (rAcc, rCurrent) => iter([...rAcc, rCurrent], rCurrent),
          acc
        );
  };

  return iter([], dir);
};

export default getDirsRecursivelySync;
