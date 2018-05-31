import path from 'path';
import getDirs from '../src/services/getDirs';

test('Get dirs recursively', () => {
  //expect.assertions(1);

  const result = [
    //`${__dirname}/dirs`,
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
  ];

  const rootDir = path.join(__dirname, 'dirs');

  return getDirs(rootDir).then(dirs => {
    expect(dirs).toEqual(result);
  });

  //
  // const dirs = await getDirs(rootDir);

  // expect(dirs).toEqual(result);
});
