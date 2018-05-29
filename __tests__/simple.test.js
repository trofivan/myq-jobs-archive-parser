import path from 'path';

const asyncPathParser = async url =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const parsed = path.parse(url);
      resolve(parsed);
    }, 200);
  });

test('Simple test: 1 + 2 + 3 equal 6', () => {
  const sum = 1 + 2 + 3;

  expect(sum).toBe(6);
  expect(sum).not.toBe(0);
  expect(sum).not.toBe(1);
  expect(sum).not.toBe('a');
});

test('ES6 import Node module path and .join', () => {
  const joinedPath = path.join('/', 'home', 'user', 'dir', 'file.txt');
  const parsedPath = path.parse(joinedPath);
  const { root, dir, base, ext, name } = parsedPath;

  expect(root).toBe('/');
  expect(dir).toBe('/home/user/dir');
  expect(ext).toBe('.txt');
  expect(name).toBe('file');

  expect(root).not.toBe('/home');
});

test('Simple async test', async () => {
  const stringPath = '/home/user/dir/file.txt';
  const parsedPath = await asyncPathParser(stringPath);

  expect(parsedPath).toEqual({
    root: '/',
    dir: '/home/user/dir',
    base: 'file.txt',
    ext: '.txt',
    name: 'file'
  });
});
