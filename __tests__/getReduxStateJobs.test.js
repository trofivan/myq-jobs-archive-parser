import getReduxStateJobs from '../src/libs/getReduxStateJobs';
import path from 'path';

const result = {
  withoutErrorMessages: [
    {
      files: ['job-0.pdf'],
      jobType: 'print',
      printerAddr: '53.201.154.38',
      serverName: 'SRV-MYQ01.domain.local',
      serverVersion: '6.2.4.27',
      timestamp: 1501903926000,
      username: 'mesp60',
      path: path.join(__dirname, 'dirs', 'dir_4'),
      xmlFile: path.join(__dirname, 'dirs', 'dir_4', 'job-print.xml')
    },
    {
      files: ['job-0.pdf', 'job-1.pdf'],
      jobType: 'print',
      printerAddr: '53.201.154.38',
      serverName: 'SRV-MYQ01.domain.local',
      serverVersion: '6.2.4.27',
      timestamp: 1501903926000,
      username: 'mesp60',
      path: path.join(__dirname, 'dirs'),
      xmlFile: path.join(__dirname, 'dirs', 'job-print.xml')
    },
    {
      files: ['job-0.pdf'],
      jobType: 'print',
      printerAddr: '53.201.154.38',
      serverName: 'SRV-MYQ01.domain.local',
      serverVersion: '6.2.4.27',
      timestamp: 1501903926000,
      username: 'mesp60',
      path: path.join(__dirname, 'dirs', 'dir_3'),
      xmlFile: path.join(__dirname, 'dirs', 'dir_3', 'job-print.xml')
    },
    {
      files: ['job-0.pdf'],
      jobType: 'print',
      printerAddr: '53.201.154.38',
      serverName: 'SRV-MYQ01.domain.local',
      serverVersion: '6.2.4.27',
      timestamp: 1501903926000,
      username: 'mesp60',
      path: path.join(__dirname, 'dirs', 'dir_1'),
      xmlFile: path.join(__dirname, 'dirs', 'dir_1', 'job-print.xml')
    },
    {
      files: ['job-0.pdf'],
      jobType: 'print',
      printerAddr: '53.201.154.38',
      serverName: 'SRV-MYQ01.domain.local',
      serverVersion: '6.2.4.27',
      timestamp: 1501903926000,
      username: 'mesp60',
      path: path.join(__dirname, 'dirs', 'dir_1', 'subdir_1'),
      xmlFile: path.join(
        __dirname,
        'dirs',
        'dir_1',
        'subdir_1',
        'job-print.XML'
      )
    },
    {
      files: ['job-1.pdf'],
      jobType: 'scan',
      printerAddr: '236.79.97.64',
      serverName: 'SRV-MYQ01.domain.local',
      serverVersion: '6.2.4.27',
      timestamp: 1497245635000,
      username: 'mturone31',
      path: path.join(__dirname, 'dirs'),
      xmlFile: path.join(__dirname, 'dirs', 'job-scan.XML')
    },
    {
      files: ['job-2.pdf'],
      jobType: 'copy',
      printerAddr: '102.85.96.219',
      serverName: 'SRV-MYQ01.domain.local',
      serverVersion: '6.2.4.27',
      timestamp: 1485772971000,
      username: 'dlatek6p',
      path: path.join(__dirname, 'dirs'),
      xmlFile: path.join(__dirname, 'dirs', 'job-copy.xml')
    },
    {
      xmlFile:
        '/home/trofivan/Projects/myq-jobs-archive-parser/__tests__/dirs/job-invalid.xml'
    },
    {
      xmlFile:
        '/home/trofivan/Projects/myq-jobs-archive-parser/__tests__/dirs/dir_3/job-invalid.XML'
    },
    {
      xmlFile:
        '/home/trofivan/Projects/myq-jobs-archive-parser/__tests__/dirs/dir_1/job-invalid.xml'
    },
    {
      xmlFile:
        '/home/trofivan/Projects/myq-jobs-archive-parser/__tests__/dirs/dir_4/job-invalid.xml'
    },
    {
      xmlFile:
        '/home/trofivan/Projects/myq-jobs-archive-parser/__tests__/dirs/dir_1/subdir_1/job-invalid.xml'
    }
  ]
};

test('Getting *.xml jobs files array and convert it to the Redux state', async () => {
  expect.assertions(2);

  const rootDir = path.join(__dirname, 'dirs');
  const jobs = await getReduxStateJobs(rootDir);

  const jobsWithoutErrorMessages = jobs.map(
    job => (job.error ? { xmlFile: job.xmlFile } : job)
  );
  expect(jobsWithoutErrorMessages).toEqual(result.withoutErrorMessages);

  const errorJobs = jobs.filter(job => job.error);
  expect(errorJobs).toHaveLength(5);
});

test('Getting *.xml jobs files array and convert it to the Redux state - empty folder', async () => {
  expect.assertions(1);

  const rootDir = path.join(__dirname, 'dirs', 'dir_3', 'subdir_1');
  const jobs = await getReduxStateJobs(rootDir);

  expect(jobs).toEqual([]);
});
