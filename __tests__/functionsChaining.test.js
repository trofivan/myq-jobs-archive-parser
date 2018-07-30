import path from 'path';
import functionsChaining from '../src/libs/functionsChaining';

test('Chaining functions: word toUpperCase ', () => {
  const word = 'myq-jobs-archive-parser';
  const fn1 = word => word.toUpperCase();
  const result = functionsChaining(word, fn1);

  expect(result).toEqual('MYQ-JOBS-ARCHIVE-PARSER');
});

test('Chaining functions: word toUpperCase -> filter symbols `-`', () => {
  const word = 'myq-jobs-archive-parser';
  const fn1 = word => word.toUpperCase();
  const fn2 = word =>
    word
      .split('')
      .filter(symb => symb !== '-')
      .join('');
  const result = functionsChaining(word, fn1, fn2);

  expect(result).toEqual('MYQJOBSARCHIVEPARSER');
});

test('Chaining functions: get paths array from JSON', () => {
  const obj = {
    jobsFolder: path.join('/', 'home', 'username', 'Desktop', '__data__'),
    jobs: {
      list: [
        {
          username: 'mesp60',
          files: ['job-0.pdf', 'job-1.pdf']
        },
        {
          username: 'dlatek6p',
          files: ['job-2.pdf', 'job-3.pdf', 'job-4.pdf']
        },
        {
          username: 'mesp60',
          files: ['job-5.pdf']
        }
      ]
    }
  };

  const getFilenames = (startObj = []) =>
    startObj.jobs.list.map(el => el.files);

  const filenamesToFlatList = arr =>
    arr.reduce((acc, el) => [...acc, ...el], []);

  const filenamesToPaths = dir => files =>
    files.map(file => path.join(obj.jobsFolder, file));

  const result = functionsChaining(
    obj,
    getFilenames,
    filenamesToFlatList,
    filenamesToPaths(obj.jobsFolder)
  );

  expect(result).toEqual([
    '/home/username/Desktop/__data__/job-0.pdf',
    '/home/username/Desktop/__data__/job-1.pdf',
    '/home/username/Desktop/__data__/job-2.pdf',
    '/home/username/Desktop/__data__/job-3.pdf',
    '/home/username/Desktop/__data__/job-4.pdf',
    '/home/username/Desktop/__data__/job-5.pdf'
  ]);
});
