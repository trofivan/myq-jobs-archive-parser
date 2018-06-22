import path from 'path';
import getReduxStateJobs from '../../src/libs/getReduxStateJobs';

const rootDir = path.join(__dirname, '..', '..', '__data__');

const start = new Date();

getReduxStateJobs(rootDir).then(result => {
  console.log(`Jobs count:  ${result.length}`);
  console.log(`Time:        ${(new Date() - start) / 1000} s`);
});
