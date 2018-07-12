import path from 'path';
import getReduxStateJobs from '../../src/libs/getReduxStateJobs';

const rootDir = path.join(__dirname, '..', '..', '__data__');

const start = new Date();

getReduxStateJobs(rootDir).then(jobs => {
  console.log(`Jobs count:  ${jobs.length}`);
  console.log(`Time:        ${(new Date() - start) / 1000} s`);
  console.log(`With error:  ${jobs.filter(job => job.error).length}`);
  console.log(jobs.filter(job => job.error));
});
