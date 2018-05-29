# MyQ Jobs Archive Parser

MyQ Jobs Archive Parser for Windows, Linux and Mac OS X.

# For developers

## The Redux state example of application

```js
{
  locale: 'en',
  filter: {
    users: ['trofivan'],
    jobsType: {
      print: true,
      scan: true,
      copy: true
    },
    date: {
      start: '',
      end: ''
    },
  },
  jobsFolder: '/home/trofivan/Desktop/__data__',
  jobs: [
    {
      timeStamp: '2018-01-01 12:00:00',
      username: 'trofivan',
      jobType: 'print',
      serverName: 'srv01.domain.local',
      printerAddr: '10.100.10.17',
      path: './2018-01-01-0001/',
      xml: 'job-001.xml',
      files: ['job-001.pdf']
    },
    {
      timeStamp: '2018-01-01 12:05:00',
      username: 'otheruser',
      jobType: 'scan',
      serverName: 'srv01.domain.local',
      printerAddr: '10.100.10.19',
      path: './2018-01-01-0001/',
      xml: 'job-002.xml',
      files: ['job-002.pdf']
    },
    {
      timeStamp: '2018-01-01 13:00:00',
      username: 'trofivan',
      jobType: 'copy',
      serverName: 'srv01.domain.local',
      printerAddr: '10.100.10.18',
      path: './2018-01-01-0001/',
      xml: 'job-003.xml',
      files: ['job-003-0.pdf', 'job-003-1.pdf']
    }
  ]
}
```
