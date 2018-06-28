import getReduxStateJobs from '../src/libs/getReduxStateJobs';
import path from 'path';

const result = [
  {
    files: ['job-2.pdf'],
    jobType: 'copy',
    printerAddr: '102.85.96.219',
    serverName: 'SRV-MYQ01.domain.local',
    serverVersion: '6.2.4.27',
    timestamp: '2017-01-30 15:42:51',
    username: 'dlatek6p',
    xmlFile: path.join(__dirname, 'dirs', 'job-copy.xml')
  },
  {
    
    xmlFile: path.join(__dirname, 'dirs', 'job-invalid.xml')
  },
  {
    files: ['job-0.pdf', 'job-1.pdf'],
    jobType: 'print',
    printerAddr: '53.201.154.38',
    serverName: 'SRV-MYQ01.domain.local',
    serverVersion: '6.2.4.27',
    timestamp: '2017-08-05 08:32:06',
    username: 'mesp60',
    xmlFile: path.join(__dirname, 'dirs', 'job-print.xml')
  },
  {
    files: ['job-1.pdf'],
    jobType: 'scan',
    printerAddr: '236.79.97.64',
    serverName: 'SRV-MYQ01.domain.local',
    serverVersion: '6.2.4.27',
    timestamp: '2017-06-12 10:33:55',
    username: 'mturone31',
    xmlFile: path.join(__dirname, 'dirs', 'job-scan.XML')
  },
  {
    
    xmlFile: path.join(__dirname, 'dirs', 'dir_1', 'job-invalid.xml')
  },
  {
    files: ['job-0.pdf'],
    jobType: 'print',
    printerAddr: '53.201.154.38',
    serverName: 'SRV-MYQ01.domain.local',
    serverVersion: '6.2.4.27',
    timestamp: '2017-08-05 08:32:06',
    username: 'mesp60',
    xmlFile: path.join(__dirname, 'dirs', 'dir_1', 'job-print.xml')
  },
  {
    
    xmlFile: path.join(
      __dirname,
      'dirs',
      'dir_1',
      'subdir_1',
      'job-invalid.xml'
    )
  },
  {
    files: ['job-0.pdf'],
    jobType: 'print',
    printerAddr: '53.201.154.38',
    serverName: 'SRV-MYQ01.domain.local',
    serverVersion: '6.2.4.27',
    timestamp: '2017-08-05 08:32:06',
    username: 'mesp60',
    xmlFile: path.join(__dirname, 'dirs', 'dir_1', 'subdir_1', 'job-print.XML')
  },
  {
    
    xmlFile: path.join(__dirname, 'dirs', 'dir_3', 'job-invalid.XML')
  },
  {
    files: ['job-0.pdf'],
    jobType: 'print',
    printerAddr: '53.201.154.38',
    serverName: 'SRV-MYQ01.domain.local',
    serverVersion: '6.2.4.27',
    timestamp: '2017-08-05 08:32:06',
    username: 'mesp60',
    xmlFile: path.join(__dirname, 'dirs', 'dir_3', 'job-print.xml')
  },
  {
    
    xmlFile: path.join(__dirname, 'dirs', 'dir_4', 'job-invalid.xml')
  },
  {
    files: ['job-0.pdf'],
    jobType: 'print',
    printerAddr: '53.201.154.38',
    serverName: 'SRV-MYQ01.domain.local',
    serverVersion: '6.2.4.27',
    timestamp: '2017-08-05 08:32:06',
    username: 'mesp60',
    xmlFile: path.join(__dirname, 'dirs', 'dir_4', 'job-print.xml')
  }
];

test('Getting *.xml jobs files array and convert it to the Redux state', async () => {
  expect.assertions(1);

  const rootDir = path.join(__dirname, 'dirs');
  const jobs = await getReduxStateJobs(rootDir);

  expect(jobs).toMatchObject(result);
});

test('Getting *.xml jobs files array and convert it to the Redux state - empty folder', async () => {
  expect.assertions(1);

  const rootDir = path.join(__dirname, 'dirs', 'dir_3', 'subdir_1');
  const jobs = await getReduxStateJobs(rootDir);

  expect(jobs).toEqual([]);
});
