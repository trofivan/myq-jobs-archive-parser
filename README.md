# MyQ Jobs Archive Parser

MyQ Jobs Archive Parser for Windows, Linux and Mac OS X.

# For developers

## The Redux state example of application

```js
{
  locale: 'en',
  filter: {
    users: ['dlatek6p'],
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
  jobsFolder: '/home/username/Desktop/__data__',
  jobs: [
    {
      files: ['job-2.pdf'],
      jobType: 'copy',
      printerAddr: '102.85.96.219',
      serverName: 'SRV-MYQ01.domain.local',
      serverVersion: '6.2.4.27',
      timestamp: '2017-01-30 15:42:51',
      username: 'dlatek6p',
      xmlFile: '/home/username/Desktop/__data__/dirs/job-copy.xml'
    },
    {
      error: true,
      xmlFile: '/home/username/Desktop/__data__/dirs/job-invalid.xml'
    },
    {
      files: ['job-0.pdf', 'job-1.pdf'],
      jobType: 'print',
      printerAddr: '53.201.154.38',
      serverName: 'SRV-MYQ01.domain.local',
      serverVersion: '6.2.4.27',
      timestamp: '2017-08-05 08:32:06',
      username: 'mesp60',
      xmlFile: '/home/username/Desktop/__data__/dirs/job-print.xml')
    }
  ]
}
```
