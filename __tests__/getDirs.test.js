import path from 'path';
import getDirs from '../src/libs/getDirs';
import getDirsSync from '../src/libs/getDirsSync';
import getDirsRecursively from '../src/libs/getDirsRecursively';
import getDirsRecursivelySync from '../src/libs/getDirsRecursivelySync';

const results = {
  currentDir: [
    `${__dirname}/dirs/dir_1`,
    `${__dirname}/dirs/dir_2`,
    `${__dirname}/dirs/dir_3`,
    `${__dirname}/dirs/dir_4`
  ],
  recursively: [
    `${__dirname}/dirs/dir_1`,
    `${__dirname}/dirs/dir_1/subdir_1`,
    `${__dirname}/dirs/dir_1/subdir_2`,
    `${__dirname}/dirs/dir_1/subdir_3`,
    `${__dirname}/dirs/dir_2`,
    `${__dirname}/dirs/dir_2/subdir_1`,
    `${__dirname}/dirs/dir_2/subdir_2`,
    `${__dirname}/dirs/dir_2/subdir_3`,
    `${__dirname}/dirs/dir_3`,
    `${__dirname}/dirs/dir_3/subdir_1`,
    `${__dirname}/dirs/dir_3/subdir_2`,
    `${__dirname}/dirs/dir_3/subdir_3`,
    `${__dirname}/dirs/dir_4`,
    `${__dirname}/dirs/dir_4/subdir_1`,
    `${__dirname}/dirs/dir_4/subdir_2`,
    `${__dirname}/dirs/dir_4/subdir_3`
  ]
};

const rootDir = path.join(__dirname, 'dirs');

test('Asynchronous getting dirs from current dir', () => {
  expect.assertions(1);

  return getDirs(rootDir).then(dirs => {
    expect(dirs).toEqual(results.currentDir);
  });
});

test('Synchronous getting dirs from current dir', () => {
  const dirs = getDirsSync(rootDir);

  expect(dirs).toEqual(results.currentDir);
});

test('Asynchronous getting dirs recursively', () => {
  expect.assertions(1);

  return getDirsRecursively(rootDir).then(dirs => {
    expect(dirs).toEqual(results.recursively);
  });
});

test('Synchronous getting dirs recursively', () => {
  const dirs = getDirsRecursivelySync(rootDir);

  expect(dirs).toEqual(results.recursively);
});
